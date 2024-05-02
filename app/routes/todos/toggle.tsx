import { createRoute } from "honox/factory";
import { toggleAllTodos } from "../../models/todo";

export const POST = createRoute(async (c) => {
  await toggleAllTodos();
  return c.redirect(c.req.header("Referer") ?? "/");
});
