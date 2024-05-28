import type { JSX } from "hono/jsx/jsx-runtime";
import { cn } from "../lib/utils";

type Props = JSX.IntrinsicElements["button"];

export default function TodoButton({
  class: className,
  children,
  ...props
}: Props) {
  return (
    <button class={cn("appearance-none", className)} {...props}>
      {children}
    </button>
  );
}
