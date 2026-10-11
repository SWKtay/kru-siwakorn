import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const items = [
  { href: "/courses/p31101", key: "courses", label: "รายวิชา" },
  { href: "/media", key: "media", label: "สื่อการสอน" },
  { href: "/tools", key: "tools", label: "เครื่องมือ" },
  { href: "/about", key: "about", label: "เกี่ยวกับครู" },
];

export function TopBar({ current }: { current: string }) {
  return (
    <div className="topbar">
      <Link href="/" className="wordmark">siwakorn kaewweed</Link>
      <nav className="nav" aria-label="เมนูหลัก">
        {items.map((i) => (
          <Link key={i.key} href={i.href} aria-current={current === i.key ? "page" : undefined}>{i.label}</Link>
        ))}
      </nav>
      <ThemeToggle />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer small">
      <span>ครูศิวกร แก้ววีด · โรงเรียนสาธิตมหาวิทยาลัยวลัยลักษณ์</span>
      <Link href="/" className="link">[ กลับหน้าแรก ]</Link>
    </footer>
  );
}

export function Dots({ same = false }: { same?: boolean }) {
  return <div className={`dots${same ? " same" : ""}`} aria-hidden="true"><span /><span /></div>;
}
