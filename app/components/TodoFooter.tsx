import { cva } from "class-variance-authority";
import { useRequestContext } from "hono/jsx-renderer";
import TodoButton from "../islands/TodoButton";

interface Props {
  completedTodosCount: number;
  todosCount: number;
}

function CompletedForm() {
  return (
    <form method="post" action="/todos/completed" class="text-right">
      <TodoButton
        class="cursor-pointer no-underline hover:underline active:no-underline"
        type="submit"
      >
        Clear completed
      </TodoButton>
    </form>
  );
}

export default function TodoFooter({ completedTodosCount, todosCount }: Props) {
  const c = useRequestContext();

  if (todosCount <= 0) {
    return null;
  }

  const activeCount = todosCount - completedTodosCount;

  const link = cva(
    [
      "m-1",
      "rounded-sm",
      "border",
      "px-2",
      "py-1",
      "no-underline",
      "hover:border-red-400",
    ],
    {
      variants: {
        intent: {
          active: ["border-red-700"],
          inactive: ["border-transparent"],
        },
      },
    },
  );

  return (
    <footer class="isolate grid grid-cols-2 gap-2 px-4 py-2.5 sm:grid-cols-3">
      <span>
        <strong class="font-light">{activeCount ?? "No"}</strong>{" "}
        {activeCount === 1 ? "item" : "items"} left
      </span>
      <ul class="order-last col-span-full text-center sm:order-none sm:col-auto">
        {[
          { href: "/", text: "All" },
          { href: "/active", text: "Active" },
          { href: "/completed", text: "Completed" },
        ].map(({ href, text }) => (
          <li class="inline" key={href}>
            <a
              class={
                c.req.path === href
                  ? link({ intent: "active" })
                  : link({ intent: "inactive" })
              }
              href={href}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      {!!completedTodosCount && <CompletedForm />}
    </footer>
  );
}
