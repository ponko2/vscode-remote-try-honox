import { createRoute } from "honox/factory";
import TodoPage from "../components/TodoPage";
import { fetchTodos } from "../models/todo";

export default createRoute(async (c) => {
  const todos = await fetchTodos();
  return c.render(<TodoPage todos={todos} type="active" />, {
    title: "Active",
  });
});
