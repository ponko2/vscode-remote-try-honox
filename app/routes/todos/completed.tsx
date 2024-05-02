import { createRoute } from "honox/factory";
import { deleteCompletedTodos } from "../../models/todo";

export const POST = createRoute(async (c) => {
  await deleteCompletedTodos();
  return c.redirect(c.req.header("Referer") ?? "/");
});
