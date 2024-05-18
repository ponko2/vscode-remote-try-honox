import TodoCreateForm from "../islands/TodoCreateForm";
import TodoToggleForm from "../islands/TodoToggleForm";
import { cn } from "../lib/utils";

interface Props {
  completedTodosCount: number;
  todosCount: number;
}

export default function TodoHeader({ completedTodosCount, todosCount }: Props) {
  return (
    <header class={cn("relative mt-32 h-16")}>
      <h1 class="absolute bottom-16 w-full pb-6 text-center text-7xl/none font-extralight text-red-700 [text-rendering:optimizeLegibility]">
        todos
      </h1>
      <TodoCreateForm />
      {!!todosCount && (
        <TodoToggleForm checked={completedTodosCount === todosCount} />
      )}
    </header>
  );
}
