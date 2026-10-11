import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { Dots } from "@/components/Chrome";
import { EMAIL, PORTFOLIO_URL, QUOTE, homeCourses, media, pageImg, tools } from "@/data/site";

const tape1 = ["สุขศึกษา", "พลศึกษา", "WEIGHT TRAINING", "ว่ายน้ำ", "ฟุตซอล", "วิเคราะห์กีฬา"];
const tape2 = ["LEARN BY DOING", "เรียนด้วยการลงมือทำ", "SAFE CLASSROOM", "ชั้นเรียนปลอดภัย"];
const Tape = ({ words, cls }: { words: string[]; cls: string }) => (
  <div className={`tape ${cls}`} aria-hidden="true">
    {Array.from({ length: 6 }).flatMap((_, r) => words.map((w, i) => <span key={`${r}-${i}`}>{w}&nbsp;&nbsp;■ ■&nbsp;&nbsp;</span>))}
  </div>
);

export default function Home() {
  const featured = ["personal-safety", "digital-safety-playbook", "teen-growth-blueprint", "body-engineering-blueprint"]
    .map((s) => media.find((m) => m.slug === s)!);
  return (
    <>
      <header className="hero" id="top">
        <img className="portrait p-dark" src="/img/portrait-dark.jpg" alt="ครูศิวกร แก้ววีด" />
        <img className="portrait p-light" src="/img/portrait-light.png" alt="ครูศิวกร แก้ววีด" />
        <ThemeToggle className="hero-toggle" />
        <div className="hero-top">
          <Link href="/" className="wordmark">siwakorn kaewweed</Link>
          <nav className="hero-nav" aria-label="เมนูหลัก">
            <Link href="/courses/p31101">รายวิชา</Link><span className="dot" />
            <Link href="/media">สื่อการสอน</Link><span className="dot" />
            <Link href="/tools">เครื่องมือ</Link><span className="dot" />
            <Link href="/about">เกี่ยวกับครู</Link>
          </nav>
        </div>
        <div className="hero-row hero-a">
          <h1>เรียนด้วย<br />การลงมือทำ</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 250, paddingTop: 18 }}>
            <Dots same />
            <p className="hero-meta">ครูศิวกร แก้ววีด<br />กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา<br />โรงเรียนสาธิตมหาวิทยาลัยวลัยลักษณ์</p>
          </div>
        </div>
        <div className="hero-row hero-b">
          <p className="hero-meta">เอกสาร สื่อการสอน และเครื่องมือของทุกรายวิชา เปิดอ่านและดาวน์โหลดได้จากมือถือ ไม่ต้องเข้าสู่ระบบ</p>
          <p className="h1b">ในชั้นเรียน<br />ที่ปลอดภัย</p>
        </div>
      </header>

      <section className="wrap intro">
        <div style={{ flex: "1 1 260px", maxWidth: 340, display: "flex", flexDirection: "column", gap: 18 }}>
          <Dots same />
          <div style={{ fontSize: 15, letterSpacing: "0.12em", fontWeight: 400 }}>THE NEXT-GEN PE TEACHER</div>
          <p className="small muted">Beyond Sports. Building Better Humans.</p>
          <div><Link href="/about" className="link">[ เกี่ยวกับครู ]</Link></div>
        </div>
        <p className="quote">{QUOTE.map((q, i) => <span className="ql" key={i}>{q}</span>)}</p>
      </section>

      <div className="tapes"><Tape words={tape1} cls="t1" /><Tape words={tape2} cls="t2" /></div>

      <section className="wrap split" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="side">
          <Dots same />
          <h2 className="h2">รายวิชา</h2>
          <p className="small muted" style={{ maxWidth: 260 }}>ปีการศึกษา 2569 เลือกรายวิชาเพื่อดูหน่วยการเรียนรู้และหัวข้อที่เรียนแต่ละสัปดาห์</p>
        </div>
        <div className="main">
          {homeCourses.map((c) => (
            <Link key={c.id} href={`/courses/${c.id}`} className={`crow${c.hot ? " hot" : ""}`}>
              <span className="c1">{c.code}</span><span className="c2">{c.name}</span><span className="c3">{c.level}</span><span className="c4">{c.n}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 72, paddingBottom: 56 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px", marginBottom: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}><Dots same /><h2 className="h2">สื่อการสอน</h2></div>
          <Link href="/media" className="link">[ ดูสื่อทั้งหมด ]</Link>
        </div>
        <div className="tiles">
          {featured.map((m) => (
            <Link href={`/media/${m.slug}`} className="tile" key={m.slug}>
              <img src={pageImg(m.slug, 1)} alt={`ปกสื่อ ${m.title}`} loading="lazy" />
              <span className="meta"><span style={{ color: "var(--fg)" }}>{m.title}</span><span>{m.subject}</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="toolsband">
        <div className="glow" aria-hidden="true" />
        <div className="ghost wordmark" aria-hidden="true">tools</div>
        <div className="in" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="dots" aria-hidden="true"><span style={{ background: "#E87532" }} /><span /></div>
            <h2 className="h2">เครื่องมือ</h2>
          </div>
          <Link href="/tools" className="link">[ ดูรายละเอียดทุกเครื่องมือ ]</Link>
        </div>
        <div className="in toolcols">
          {tools.map((t) => (
            <div className="toolcol" key={t.name}>
              <span className="who">{t.who}</span>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <div><a href={t.url} className="cta" target="_blank" rel="noopener noreferrer">เข้าใช้งาน {t.name.replace("WUDS ", "")}</a></div>
            </div>
          ))}
        </div>
      </section>

      <footer className="homefoot">
        <div className="wrap cols" style={{ width: "100%" }}>
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 14, maxWidth: 440 }}>
            <p style={{ fontSize: 26, lineHeight: 1.3 }}>มีคำถามเรื่องงานหรือสื่อการสอน ถามครูได้ในคาบเรียน หรือส่งอีเมลมาได้</p>
            <p className="small muted">อีเมล <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>{EMAIL}</a></p>
          </div>
          <nav aria-label="ลิงก์ท้ายหน้า" style={{ display: "flex", flexWrap: "wrap", gap: "8px 56px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href="/courses/p31101" className="link">[ รายวิชา ]</Link>
              <Link href="/media" className="link">[ สื่อการสอน ]</Link>
              <Link href="/tools" className="link">[ เครื่องมือ ]</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href="/about" className="link">[ เกี่ยวกับครู ]</Link>
              <a href={PORTFOLIO_URL} className="link" target="_blank" rel="noopener noreferrer">[ สำหรับครู: แฟ้มผลการปฏิบัติงาน ]</a>
            </div>
          </nav>
        </div>
        <div className="big wordmark" aria-hidden="true">siwakorn</div>
      </footer>
    </>
  );
}
