import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer, TopBar } from "@/components/Chrome";
import Reader from "@/components/Reader";
import { getCourse, getMedia, media, pdfUrl } from "@/data/site";

export function generateStaticParams() { return media.map((m) => ({ slug: m.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const m = getMedia((await params).slug);
  return { title: m ? m.title : "สื่อการสอน" };
}

export default async function MediaReader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMedia(slug);
  if (!m) notFound();
  const c = getCourse(m.courseId);
  return (
    <>
      <TopBar current="media" />
      <header className="wrap" style={{ paddingTop: 36, paddingBottom: 28, display: "flex", flexDirection: "column", gap: 18 }}>
        <div className="crumbs small"><Link href="/">หน้าแรก</Link><span>/</span><Link href="/media">สื่อการสอน</Link><span>/</span><span style={{ color: "var(--fg)" }}>{m.title}</span></div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
            <div className="small muted" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>{m.subject} · {m.kind}</div>
            <h1 style={{ fontWeight: 200, fontSize: "clamp(30px, 4.2vw, 58px)", lineHeight: 1.12 }}>{m.title}</h1>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a className="cta" href={pdfUrl(m.slug)} download>ดาวน์โหลด PDF</a>
            <Link href="/media" className="btn" style={{ minHeight: 50 }}>กลับคลังสื่อ</Link>
          </div>
        </div>
      </header>
      <section className="wrap reader">
        <Reader slug={m.slug} title={m.title} pages={m.pages} />
        <aside>
          <div>
            <div className="eyebrow" style={{ paddingBottom: 12 }}>รายละเอียด</div>
            <div className="rows">
              <div className="kv"><span className="k">รายวิชา</span><span>{m.course}</span></div>
              <div className="kv"><span className="k">ระดับชั้น</span><span>{m.level}</span></div>
              <div className="kv"><span className="k">ประเภท</span><span>{m.kind}</span></div>
              <div className="kv"><span className="k">ไฟล์</span><span>PDF · {m.pages} หน้า</span></div>
            </div>
          </div>
          {c && (
            <Link href={`/courses/${c.id}`} className="card">
              <span className="small muted">ไปที่รายวิชา</span>
              <span style={{ fontSize: 24, lineHeight: 1.2 }}>{c.name}</span>
              <span className="link">[ เปิดหน้ารายวิชา ]</span>
            </Link>
          )}
        </aside>
      </section>
      <Footer />
    </>
  );
}
