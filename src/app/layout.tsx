import type { Metadata, Viewport } from "next";
import "@fontsource/anuphan/thai-200.css";
import "@fontsource/anuphan/thai-300.css";
import "@fontsource/anuphan/thai-400.css";
import "@fontsource/anuphan/thai-500.css";
import "@fontsource/anuphan/thai-600.css";
import "@fontsource/anuphan/latin-200.css";
import "@fontsource/anuphan/latin-300.css";
import "@fontsource/anuphan/latin-400.css";
import "@fontsource/anuphan/latin-500.css";
import "@fontsource/anuphan/latin-600.css";
import "@fontsource/oswald/latin-400.css";
import "@fontsource/oswald/latin-500.css";
import "./globals.css";
import Motion from "@/components/Motion";

export const metadata: Metadata = {
  title: { default: "ครูศิวกร แก้ววีด", template: "%s · ครูศิวกร แก้ววีด" },
  description: "เอกสาร สื่อการสอน และเครื่องมือของครูศิวกร แก้ววีด กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา โรงเรียนสาธิตมหาวิทยาลัยวลัยลักษณ์",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('hub-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}<Motion /></body>
    </html>
  );
}
