import React from "react";
import Image from "next/image";

interface DownloadButtonProps {
  variant?: "light" | "dark";
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  variant = "light",
  href,
  children,
  icon,
  className = "",
}) => {
  const baseClasses =
    "relative w-[240px] transition-all text-lg font-medium text-center rounded-2xl flex items-center justify-center";

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

// Specialized component for App Store download button
export const AppStoreButton: React.FC<{ href: string }> = ({ href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="block w-[240px] transition-opacity hover:opacity-80"
    >
      <Image
        src="/assets/download_on_app_store_black.svg"
        alt="Download on the App Store"
        width={240}
        height={80}
      />
    </a>
  );
};
