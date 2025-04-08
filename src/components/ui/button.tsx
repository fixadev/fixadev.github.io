import React from "react";

interface ButtonProps {
  variant?: "light" | "dark";
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "light",
  href,
  children,
  icon,
  className = "",
}) => {
  const baseClasses =
    "relative w-[240px] transition-all text-lg font-medium text-center rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]";

  const variantClasses =
    variant === "light"
      ? "bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:bg-white/15 hover:border-white/30"
      : "bg-black/90 border-2 border-[#323232] hover:bg-black/70 hover:border-[#464646]";

  return (
    <a
      target="_blank"
      href={href}
      className={`${baseClasses} ${variantClasses} ${className} gap-2.5 px-6 py-4`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2.5">
        {children}
        {icon}
      </span>
    </a>
  );
};
