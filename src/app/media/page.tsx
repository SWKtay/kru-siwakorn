import { Dots, Footer, TopBar } from "@/components/Chrome";
import MediaGrid from "@/components/MediaGrid";

export const metadata = { title: "สื่อการสอน" };

export default function MediaPage() {
  return (
    <>
      <TopBar current="media" />
      <header className="wrap pagehead">
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}><Dots /><h1 className="display">สื่อการสอน</h1></div>
        <p className="lead">ใบงานและสื่อประกอบการสอนของแต่ละรายวิชา เปิดอ่านในหน้าเว็บหรือดาวน์โหลดเก็บไว้ได้</p>
      </header>
      <section className="wrap" style={{ paddingBottom: 88 }}><MediaGrid /></section>
      <Footer />
    </>
  );
}
