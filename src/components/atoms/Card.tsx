import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl bg-slate-900/70 backdrop-blur border border-slate-700 p-6 shadow-lg transition hover:shadow-xl">
      {children}
    </div>
  );
}

