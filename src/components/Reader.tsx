"use client";
import { useEffect, useState } from "react";
import { pageImg } from "@/data/site";

export default function Reader({ slug, title, pages }: { slug: string; title: string; pages: number }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setPage((p) => Math.min(pages, p + 1));
      if (e.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pages]);
  return (
    <div className="view">
      <div className="stage">
        <img src={pageImg(slug, page)} alt={`${title} หน้า ${page}`} />
      </div>
      {pages > 1 && (
        <>
          <div className="pager">
            <button type="button" className="btn" disabled={page <= 1} onClick={() => setPage(page - 1)}>ก่อนหน้า</button>
            <span className="small" aria-live="polite">หน้า {page} / {pages}</span>
            <button type="button" className="btn" disabled={page >= pages} onClick={() => setPage(page + 1)}>ถัดไป</button>
          </div>
          <div className="thumbs">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button key={n} type="button" aria-pressed={n === page} aria-label={`ไปหน้า ${n}`} onClick={() => setPage(n)}>
                <img src={pageImg(slug, n)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
