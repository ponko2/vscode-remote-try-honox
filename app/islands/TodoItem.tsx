import type { Todo } from "@prisma/client";
import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "hono/jsx";
import { cn } from "../lib/utils";
import TodoButton from "./TodoButton";

type Props = {
  todo: Todo;
};

function UpdateForm({
  todo,
}: Props & { onEditChange: (edit: boolean) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  });
  return (
    <form method="post" action={`/todos/${todo.id}`}>
      <input type="hidden" name="_method" value="put" />
      {todo.completed ? (
        <input type="hidden" name="completed" value="on" />
      ) : (
        <></>
      )}
      <input
        type="text"
        name="title"
        value={todo.title}
        class={cn(
          "size-full border border-neutral-400 px-4 py-3 shadow-inner",
          "focus:shadow focus:shadow-red-400 focus:outline-none",
        )}
        onBlur={(event) => {
          if (event.currentTarget instanceof HTMLInputElement) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (event.currentTarget instanceof HTMLInputElement) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }
        }}
        ref={ref}
      />
    </form>
  );
}

function ToggleForm({
  todo,
  onEditChange,
}: Props & { onEditChange: (edit: boolean) => void }) {
  return (
    <form method="post" action={`/todos/${todo.id}`}>
      <input type="hidden" name="_method" value="put" />
      <input type="hidden" name="title" value={todo.title} />
      <input
        type="checkbox"
        name="completed"
        value="on"
        checked={todo.completed}
        class="peer absolute inset-y-0 my-auto size-12 appearance-none outline-none"
        onChange={(event) => {
          if (event.currentTarget instanceof HTMLInputElement) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
        }}
      />
      <label
        class={cn(
          "block h-full break-words bg-unchecked bg-left bg-no-repeat py-4 pl-14 pr-4 font-normal leading-tight text-neutral-700 transition-colors duration-500",
          "peer-checked:bg-checked peer-checked:text-neutral-400 peer-checked:line-through",
          "peer-focus:shadow peer-focus:shadow-red-400 peer-focus:outline-none",
        )}
        onDoubleClick={() => onEditChange(true)}
      >
        {todo.title}
      </label>
    </form>
  );
}

function DeleteForm({ todo }: Props) {
  return (
    <form method="post" action={`/todos/${todo.id}`}>
      <input type="hidden" name="_method" value="delete" />
      <TodoButton
        type="submit"
        class={cn(
          "absolute inset-y-0 right-2.5 my-auto hidden size-10 text-3xl text-neutral-400 transition-colors duration-200 ease-out",
          "after:block after:h-full after:content-['×']",
          "hover:text-red-400",
          "focus:text-red-400",
          "group-hover:block",
        )}
      />
    </form>
  );
}

export default function TodoItem({ todo }: Props) {
  const [editing, setEditing] = useState(false);

  const list = cva("relative text-2xl h-16", {
    variants: {
      intent: {
        primary: ["group"],
        editing: ["pl-11"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  });

  if (editing) {
    return (
      <li class={list({ intent: "editing" })}>
        <UpdateForm onEditChange={setEditing} todo={todo} />
      </li>
    );
  }
  return (
    <li class={list()}>
      <ToggleForm onEditChange={setEditing} todo={todo} />
      <DeleteForm todo={todo} />
    </li>
  );
}
