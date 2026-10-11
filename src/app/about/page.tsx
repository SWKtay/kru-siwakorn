import Link from "next/link";
import { Dots, Footer, TopBar } from "@/components/Chrome";
import { EMAIL, QUOTE, about, tools } from "@/data/site";

export const metadata = { title: "เกี่ยวกับครู" };

export default function AboutPage() {
  return (
    <>
      <TopBar current="about" />
      <section className="wrap abouthero">
        <div className="photo imgin"><img src="/img/portrait-about.jpg" alt="ครูศิวกร แก้ววีด" /></div>
        <div className="txt">
          <Dots />
          <div className="eyebrow">THE NEXT-GEN PE TEACHER</div>
          <h1>Beyond Sports.<br />Building Better Humans.</h1>
          <p className="q">{QUOTE.map((q, i) => <span className="ql" key={i}>{q}</span>)}</p>
          <div style={{ fontSize: 17, fontWeight: 400 }}>ครูศิวกร แก้ววีด<span className="muted" style={{ fontWeight: 300 }}> · โรงเรียนสาธิตมหาวิทยาลัยวลัยลักษณ์</span></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px" }}>
            <Link href="/courses/p31101" className="link">[ ดูรายวิชาที่สอน ]</Link>
            <Link href="/media" className="link">[ ดูสื่อการสอน ]</Link>
            <Link href="/tools" className="link">[ ดูเครื่องมือ ]</Link>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 80 }}>
        <div className="eyebrow" style={{ paddingBottom: 14 }}>ข้อมูลครู</div>
        <div className="rows">{about.facts.map(([k, v]) => (<div className="fact" key={k} data-rv><div className="k">{k}</div><div className="v">{v}</div></div>))}</div>
      </section>

      <section className="wrap twocol" style={{ paddingBottom: 88 }}>
        <div style={{ flex: "1.3 1 420px", minWidth: 0 }}>
          <div className="eyebrow" style={{ paddingBottom: 14 }}>ประสบการณ์สอน</div>
          <div className="rows">{about.path.map(([y, t, d]) => (
            <div className="pathrow" key={t} data-rv><div className="y">{y}</div><div style={{ flex: "1 1 260px", minWidth: 0 }}><div className="t">{t}</div><div className="d">{d}</div></div></div>
          ))}</div>
        </div>
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <div className="eyebrow" style={{ paddingBottom: 14 }}>ความเชี่ยวชาญและใบรับรอง</div>
          <div className="rows">{about.skills.map(([t, lv]) => (<div className="skill" key={t} data-rv><span>{t}</span><span className="lv">{lv}</span></div>))}</div>
        </div>
      </section>

      <section className="band">
        <div className="wrap twocol" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ flex: "1 1 360px", minWidth: 0 }}>
            <div className="eyebrow" style={{ paddingBottom: 14 }}>ระบบที่ครูออกแบบ</div>
            <div className="rows">{tools.map((t) => (
              <a key={t.name} href={t.url} className="listlink" style={{ fontSize: 22 }} target="_blank" rel="noopener noreferrer"><span>{t.name}</span><span className="go">[ เปิด ]</span></a>
            ))}</div>
          </div>
          <div style={{ flex: "1 1 360px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="eyebrow">ติดต่อครู</div>
            <div style={{ fontWeight: 200, fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.15 }}>มีคำถามเรื่องเรียน<br />ถามครูได้เสมอ</div>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: 20, fontWeight: 400, textDecoration: "underline", textUnderlineOffset: 4, padding: "10px 0" }}>{EMAIL}</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
