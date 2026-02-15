import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function NeoInput({ className = "", label, id, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block font-heading font-extrabold uppercase text-sm tracking-wider mb-2">
          {label}
        </label>
      )}
      <input id={id} className={twMerge(clsx("w-full bg-main border-3 border-black p-4 font-mono text-lg outline-none", "placeholder:text-gray-500", "focus:bg-primary transition-colors duration-200", className))} {...props} />
    </div>
  );
}
