import { cn } from "../lib/utils";

export default function TodoCreateForm() {
  return (
    <form method="post" action="/todos">
      <input
        type="text"
        name="title"
        class={cn(
          "size-full py-4 pl-14 pr-4 text-2xl shadow-inner",
          "placeholder:font-normal placeholder:italic placeholder:text-black/40",
          "focus:shadow focus:shadow-red-400 focus:outline-none",
        )}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" &&
            event.currentTarget instanceof HTMLInputElement
          ) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
        }}
        placeholder="What needs to be done?"
      />
    </form>
  );
}
