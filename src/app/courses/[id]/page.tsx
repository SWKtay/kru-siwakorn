import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Dots, Footer, TopBar } from "@/components/Chrome";
import Units from "@/components/Units";
import { courses, getCourse, mediaOfCourse, pageImg, tools } from "@/data/site";

export function generateStaticParams() { return courses.map((c) => ({ id: c.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const c = getCourse((await params).id);
  return { title: c ? `${c.code} ${c.name}` : "รายวิชา" };
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = getCourse(id);
  if (!c) notFound();
  const ms = mediaOfCourse(c.id);
  const tool = tools.find((t) => t.courseId === c.id);
  return (
    <>
      <TopBar current="courses" />
      <header className="wrap" style={{ paddingTop: 56, paddingBottom: 56, display: "flex", flexDirection: "column", gap: 28 }}>
        <div className="crumbs small"><Link href="/">หน้าแรก</Link><span>/</span><span>รายวิชา</span><span>/</span><span style={{ color: "var(--fg)" }}>{c.code}</span></div>
        <nav className="tabs" aria-label="เลือกรายวิชา">
          {courses.map((x) => (
            <Link key={x.id} href={`/courses/${x.id}`} className={`btn${x.id === c.id ? " on" : ""}`} aria-current={x.id === c.id ? "page" : undefined}>{x.label}</Link>
          ))}
        </nav>
        <Dots />
        <h1 className="display">{c.name}</h1>
        <p style={{ fontSize: "clamp(19px, 2.1vw, 26px)", maxWidth: 820 }}>{c.sub}</p>
        <div className="metagrid">
          <div><span className="k">ระดับชั้น</span><span>{c.level}</span></div>
          <div><span className="k">โครงสร้างรายวิชา</span><span>{c.struct}</span></div>
          <div><span className="k">หน่วยกิต</span><span>{c.credit}</span></div>
          <div><span className="k">เวลาเรียน</span><span>{c.time}</span></div>
        </div>
      </header>

      <section className="wrap split" style={{ paddingTop: 24, paddingBottom: 72 }}>
        <div className="side">
          <Dots same />
          <h2 className="h2">หน่วยการเรียนรู้</h2>
          <p className="small muted" style={{ maxWidth: 260 }}>เลือกหน่วยเพื่อดูหัวข้อที่เรียนในแต่ละสัปดาห์</p>
        </div>
        <div className="main"><Units units={c.units} /></div>
      </section>

      {(ms.length > 0 || tool) && (
        <section className="wrap" style={{ paddingBottom: 88, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
          {ms.length > 0 && (
            <div>
              <div className="eyebrow" style={{ paddingBottom: 14 }}>สื่อประกอบรายวิชานี้</div>
              {ms.length === 1 ? (
                <Link href={`/media/${ms[0].slug}`} className="tile" style={{ border: "1px solid var(--line)", padding: 20 }}>
                  <img src={pageImg(ms[0].slug, 1)} alt={`ปกสื่อ ${ms[0].title}`} />
                  <span style={{ fontSize: 26, lineHeight: 1.2 }}>{ms[0].title}</span>
                  <span className="link">[ เปิดสื่อ ]</span>
                </Link>
              ) : (
                <div className="rows">
                  {ms.map((m) => (
                    <Link key={m.slug} href={`/media/${m.slug}`} className="listlink"><span style={{ minWidth: 0 }}>{m.title}</span><span className="go">[ เปิดสื่อ ]</span></Link>
                  ))}
                </div>
              )}
            </div>
          )}
          {tool && (
            <div className="promo">
              <span className="small" style={{ fontWeight: 500 }}>เครื่องมือของรายวิชานี้</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontWeight: 200, fontSize: "clamp(36px, 4.4vw, 60px)", lineHeight: 1.05 }}>{tool.name}</span>
                <span style={{ fontSize: 15, fontWeight: 400, maxWidth: 420 }}>{tool.desc}</span>
              </div>
              <div><a href={tool.url} className="cta" target="_blank" rel="noopener noreferrer">เข้าใช้งาน FIT PLAN</a></div>
            </div>
          )}
        </section>
      )}
      <Footer />
    </>
  );
}
