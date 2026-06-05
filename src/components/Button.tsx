import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ 
  variant = "primary", 
  href, 
  external,
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-[#111] text-white hover:bg-black hover:shadow-lg",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "bg-transparent text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
  };

  const classes = clsx(baseClasses, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props as any}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
