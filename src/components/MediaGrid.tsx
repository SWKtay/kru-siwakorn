"use client";
import Link from "next/link";
import { useState } from "react";
import { media, pageImg, pdfUrl } from "@/data/site";

const filters = ["ทั้งหมด", "สุขศึกษา", "Weight Training"];

export default function MediaGrid() {
  const [cur, setCur] = useState("ทั้งหมด");
  const items = media.filter((m) => cur === "ทั้งหมด" || m.subject === cur);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "12px 0", marginBottom: 28 }}>
        <div className="tabs" role="group" aria-label="กรองตามรายวิชา">
          {filters.map((f) => (
            <button key={f} type="button" className="btn" aria-pressed={cur === f} onClick={() => setCur(f)}>{f}</button>
          ))}
        </div>
        <span className="small muted">แสดง {items.length} จาก {media.length} รายการ</span>
      </div>
      <div className="tiles">
        {items.map((m, i) => (
          <div className="tile fx" key={m.slug} data-rv style={{ ["--d" as string]: `${(i % 4) * 70}ms` }}>
            <Link href={`/media/${m.slug}`}><img src={pageImg(m.slug, 1)} alt={`ปกสื่อ ${m.title}`} loading="lazy" /></Link>
            <div className="meta"><span>{m.subject} · {m.kind}</span><span>{m.pages} หน้า</span></div>
            <Link href={`/media/${m.slug}`} className="t">{m.title}</Link>
            <div className="acts">
              <Link href={`/media/${m.slug}`} className="link">[ อ่าน ]</Link>
              <a href={pdfUrl(m.slug)} download className="link">[ ดาวน์โหลด ]</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
