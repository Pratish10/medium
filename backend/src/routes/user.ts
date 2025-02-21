import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinSchema, signupSchema } from "@paaro/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    prisma?: unknown;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = c.env.prisma as PrismaClient;

  const body = await c.req.json();

  const validatedFields = signinSchema.safeParse(body);

  if (!validatedFields.success) {
    c.status(411);
    return c.json({ error: "Invalid Fields!" });
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "Something Went Wrong!" });
  }

  const token = await sign(
    {
      id: user.id,
    },
    c.env.JWT_SECRET
  );

  return c.json({
    jwt: token,
  });
});

userRouter.post("/signin", async (c) => {
  const prisma = c.env.prisma as PrismaClient;

  const body = await c.req.json();

  const validatedFields = signupSchema.safeParse(body);

  if (!validatedFields.success) {
    c.status(411);
    return c.json({ error: "Invalid Fields!" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "User not found!" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});
