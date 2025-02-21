import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password should be a minimum of 6 characters" }),
});
export const signinSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password should be a minimum of 6 characters" }),
});

export const blogSchema = z.object({
  content: z.string(),
  title: z.string(),
});
export const updateblogSchema = z.object({
  content: z.string(),
  title: z.string(),
  id: z.string(),
});

export type SignUpTypes = z.infer<typeof signupSchema>;
export type SignInTypes = z.infer<typeof signinSchema>;

export type BlogTypes = z.infer<typeof blogSchema>;
export type UpdateBlogTypes = z.infer<typeof updateblogSchema>;
