"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);
  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setTheme(t === "light" ? "light" : "dark");
  }, []);
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("hub-theme", next); } catch {}
    setTheme(next);
  };
  const light = theme === "light";
  return (
    <button type="button" className={`btn ${className}`} onClick={toggle}
      aria-label={light ? "เปลี่ยนเป็นโหมดมืด" : "เปลี่ยนเป็นโหมดสว่าง"}>
      {light ? "โหมดมืด" : "โหมดสว่าง"}
    </button>
  );
}
