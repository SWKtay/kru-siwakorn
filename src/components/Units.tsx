"use client";
import { useState } from "react";
import type { Unit } from "@/data/site";

export default function Units({ units }: { units: Unit[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {units.map((u, i) => (
        <div className="unit" key={u.tag + u.title}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="tag">{u.tag}</span>
            <span className="ut">{u.title}</span>
            <span className="um">{u.meta}</span>
          </button>
          {open === i && (
            <div className="body">
              {u.topics.map((t, k) => (
                <div className="topic" key={k}><span className="n">{k + 1}</span><span>{t}</span></div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div style={{ borderTop: "1px solid var(--line)" }} />
    </div>
  );
}
