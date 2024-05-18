import { cn } from "../lib/utils";

interface Props {
  checked: boolean;
}

export default function TodoToggleForm({ checked }: Props) {
  return (
    <form method="post" action="/todos/toggle">
      <label>
        <input
          type="checkbox"
          checked={checked}
          class="peer appearance-none"
          onClick={(event) => {
            if (event.currentTarget instanceof HTMLInputElement) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          readOnly
        />
        <span
          class={cn(
            "absolute left-0 top-0 flex h-full w-12 items-center justify-center text-[0]",
            "before:inline-block before:rotate-90 before:px-7 before:py-2.5 before:text-2xl before:text-neutral-400 before:content-['❯']",
            "peer-checked:before:text-neutral-700 peer-focus:shadow peer-focus:shadow-red-400 peer-focus:outline-none",
          )}
        >
          Mark all as complete
        </span>
      </label>
    </form>
  );
}
