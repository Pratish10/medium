import { blogSchema, updateblogSchema } from "@paaro/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    prisma?: unknown;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const tokenToVerify = c.req.header("Authorization") ?? "";

  try {
    const decodedPayload = await verify(tokenToVerify, c.env.JWT_SECRET);
    if (decodedPayload.id) {
      c.set("userId", decodedPayload.id);
      await next();
    } else {
      c.status(403);
      return c.json({ error: "Unauthorized" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ error: "Unauthorized Error" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = c.env.prisma as PrismaClient;

  const body = await c.req.json();

  const validatedFields = blogSchema.safeParse(body);

  if (!validatedFields.success) {
    c.status(411);
    return c.json({ error: "Invalid Fields!" });
  }

  const userId = c.get("userId");

  try {
    const blog = await prisma.posts.create({
      data: {
        content: body.content,
        title: body.title,
        authorId: userId,
      },
    });
    return c.json({ record: blog });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Something went wrong!",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = c.env.prisma as PrismaClient;

  const userId = c.get("userId");

  try {
    const blogs = await prisma.posts.findMany({
      where: {
        authorId: userId,
      },
    });

    return c.json({ records: blogs });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Something went wrong!",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = c.env.prisma as PrismaClient;

  const blogId = c.req.param("id");

  try {
    const blog = await prisma.posts.findUnique({
      where: {
        id: blogId,
      },
    });
    return c.json({ record: blog });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Something went wrong!",
    });
  }
});
blogRouter.put("/", async (c) => {
  const prisma = c.env.prisma as PrismaClient;

  const body = await c.req.json();

  const validatedFields = updateblogSchema.safeParse(body);

  if (!validatedFields.success) {
    c.status(411);
    return c.json({ error: "Invalid Fields!" });
  }

  try {
    const blog = await prisma.posts.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.title,
      },
    });
    return c.json({ record: blog });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Something went wrong!",
    });
  }
});
