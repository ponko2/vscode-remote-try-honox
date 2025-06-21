import { zValidator } from "@hono/zod-validator";
import { createRoute } from "honox/factory";
import { z } from "zod/v4";
import { createTodo } from "../../models/todo";

const schema = z.object({
  title: z.string().trim().min(1),
});

export const POST = createRoute(zValidator("form", schema), async (c) => {
  const data = c.req.valid("form");
  await createTodo(data);
  return c.redirect(c.req.header("Referer") ?? "/");
});
