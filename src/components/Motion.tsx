"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** เปิดใช้การเคลื่อนไหวทั้งเว็บ: เนื้อหาปรากฏตอนเลื่อนถึง และตัวหนังสือใหญ่เลื่อนช้ากว่าเนื้อหา */
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((e) => io.observe(e));
    // กันพลาด: ถ้ามีอะไรค้าง ให้แสดงทั้งหมด
    const safety = window.setTimeout(() => els.forEach((e) => {
      const r = e.getBoundingClientRect();
      if (r.top < window.innerHeight) e.classList.add("in");
    }), 1200);

    const par = Array.from(document.querySelectorAll<HTMLElement>("[data-par]"));
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      par.forEach((e) => {
        const host = (e.parentElement ?? e).getBoundingClientRect();
        if (host.bottom < -200 || host.top > vh + 200) return;
        const k = Number(e.dataset.par) || 0.12;
        const off = e.dataset.parEdge === "bottom"
          ? Math.max(0, host.bottom - vh) * k
          : (host.top + host.height / 2 - vh / 2) * k;
        e.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    if (par.length && !reduce) { tick(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll); }
    return () => {
      io.disconnect(); window.clearTimeout(safety);
      window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);
  return null;
}
