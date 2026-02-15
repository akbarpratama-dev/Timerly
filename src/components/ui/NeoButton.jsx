import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-primary text-black",
  danger: "bg-accent text-white",
  outline: "bg-card text-black",
};

export default function NeoButton({ children, variant = "primary", className = "", disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        clsx(
          "font-heading font-extrabold uppercase tracking-wider border-3 border-black shadow-neo",
          "transition-all duration-100 ease-in-out",
          "hover:-translate-x-[2px] hover:-translate-y-[2px]",
          "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
          variants[variant] || variants.primary,
          disabled && "opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0",
          className,
        ),
      )}
      {...props}
    >
      {children}
    </button>
  );
}
