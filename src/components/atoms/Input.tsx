import React from "react";

type InputProps = {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
