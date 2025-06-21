import { zValidator } from "@hono/zod-validator";
import { createRoute } from "honox/factory";
import { z } from "zod/v4";
import { deleteTodo, updateTodo } from "../../models/todo";

const paramSchema = z.object({
  id: z.string().uuid(),
});

const formSchema = z.object({
  title: z.string().trim().optional(),
  completed: z
    .literal("on")
    .optional()
    .transform((value) => value === "on"),
});

export const PUT = createRoute(
  zValidator("param", paramSchema),
  zValidator("form", formSchema),
  async (c) => {
    const param = c.req.valid("param");
    const data = c.req.valid("form");
    await updateTodo({ ...param, ...data });
    return c.redirect(c.req.header("Referer") ?? "/");
  },
);

export const DELETE = createRoute(
  zValidator("param", paramSchema),
  async (c) => {
    const param = c.req.valid("param");
    await deleteTodo(param);
    return c.redirect(c.req.header("Referer") ?? "/");
  },
);
