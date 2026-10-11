import Link from "next/link";
import { Dots, Footer, TopBar } from "@/components/Chrome";
import { tools } from "@/data/site";

export const metadata = { title: "เครื่องมือ" };

export default function ToolsPage() {
  return (
    <>
      <TopBar current="tools" />
      <header className="wrap pagehead">
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}><Dots /><h1 className="display">เครื่องมือ</h1></div>
        <p className="lead">ระบบที่ครูออกแบบขึ้นเพื่อใช้ในการเรียนการสอนและการดูแลนักเรียน กดเข้าใช้งานได้จากหน้านี้</p>
      </header>
      <section className="wrap" style={{ paddingBottom: 56 }}>
        {tools.map((t, i) => (
          <div className={`toolblock${i === 0 ? " first" : ""}`} key={t.name}>
            <div className="l">
              <div className="top"><span>{t.no}</span><span>{t.who}</span></div>
              <div className="name">{t.name}</div>
              <p>{t.desc}</p>
              {t.courseId && <Link href={`/courses/${t.courseId}`} className="small" style={{ textDecoration: "underline", textUnderlineOffset: 4, padding: "10px 0" }}>ใช้ในรายวิชา พ31101 Weight Training</Link>}
              <div style={{ paddingTop: 6 }}><a className="cta" href={t.url} target="_blank" rel="noopener noreferrer">เข้าใช้งาน {t.name.replace("WUDS ", "")}</a></div>
            </div>
            <div className="r">
              <div className="eyebrow" style={{ paddingBottom: 10 }}>{t.listTitle}</div>
              {t.list.map((s, k) => (<div className="step" key={k}><span className="n">0{k + 1}</span><span className="t">{s}</span></div>))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
