import type { Todo } from "@prisma/client";
import TodoItem from "../islands/TodoItem";

type Props = {
  todos: Todo[];
};

export default async function TodoList({ todos }: Props) {
  return (
    <section>
      <ul class="divide-y divide-neutral-200 [&>*]:block">
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </section>
  );
}
