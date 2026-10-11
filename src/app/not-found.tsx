import Link from "next/link";
import { Footer, TopBar } from "@/components/Chrome";

export default function NotFound() {
  return (
    <>
      <TopBar current="" />
      <section className="wrap" style={{ padding: "120px 20px", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
        <h1 className="display">ไม่พบหน้านี้</h1>
        <p className="muted">ลิงก์อาจพิมพ์ผิดหรือหน้านี้ถูกย้ายแล้ว</p>
        <Link href="/" className="cta">กลับหน้าแรก</Link>
      </section>
      <Footer />
    </>
  );
}
