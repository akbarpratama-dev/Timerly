import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function NeoCard({ children, className = "", fullWidth = false, centered = false, ...props }) {
  return (
    <div className={twMerge(clsx("bg-card border-3 border-black shadow-neo p-8", fullWidth && "w-full", centered && "mx-auto", className))} {...props}>
      {children}
    </div>
  );
}
