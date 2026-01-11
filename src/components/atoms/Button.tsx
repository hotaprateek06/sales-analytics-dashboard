import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export default function Button({
  label,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-700 text-white hover:bg-slate-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
}
