import { cn } from "../lib/utils";

type Props = Hono.ButtonHTMLAttributes;

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
