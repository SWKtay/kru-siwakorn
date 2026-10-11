import coursesJson from "./courses.json";

export type Unit = { tag: string; title: string; meta: string; topics: string[] };
export type Course = {
  id: string; label: string; code: string; name: string; sub: string; level: string;
  struct: string; credit: string; time: string; units: Unit[]; media: string[];
};
export type Media = {
  slug: string; title: string; subject: string; kind: string; course: string;
  courseId: string; level: string; pages: number;
};

export const courses = coursesJson as Course[];
export const getCourse = (id: string) => courses.find((c) => c.id === id);

const H = "พ21101 สุขศึกษา 1";
export const media: Media[] = [
  { slug: "adolescent-system-manual", title: "คู่มือผู้ใช้งาน: ระบบร่างกายและจิตใจวัยรุ่น", subject: "สุขศึกษา", kind: "สื่อประกอบการสอน", course: H, courseId: "p21101", level: "ม.1", pages: 10 },
  { slug: "teen-growth-blueprint", title: "Teen Growth Blueprint", subject: "สุขศึกษา", kind: "สื่อประกอบการสอน", course: H, courseId: "p21101", level: "ม.1", pages: 15 },
  { slug: "gender-diversity", title: "ความหลากหลายทางเพศและการอยู่ร่วมกันอย่างเข้าใจ", subject: "สุขศึกษา", kind: "สื่อประกอบการสอน", course: H, courseId: "p21101", level: "ม.1", pages: 10 },
  { slug: "personal-safety", title: "Personal Safety", subject: "สุขศึกษา", kind: "สื่อประกอบการสอน", course: H, courseId: "p21101", level: "ม.1", pages: 10 },
  { slug: "digital-safety-playbook", title: "Digital Safety Playbook", subject: "สุขศึกษา", kind: "สื่อประกอบการสอน", course: H, courseId: "p21101", level: "ม.1", pages: 15 },
  { slug: "body-engineering-blueprint", title: "Body Engineering Blueprint", subject: "Weight Training", kind: "สื่อประกอบการสอน", course: "พ31101 Weight Training", courseId: "p31101", level: "ม.4", pages: 15 },
  { slug: "nervous-system-worksheet", title: "ใบงาน The Nervous System ระบบประสาท", subject: "สุขศึกษา", kind: "ใบงานสองภาษา", course: H, courseId: "p21101", level: "ม.1", pages: 1 },
];
export const getMedia = (slug: string) => media.find((m) => m.slug === slug);
export const mediaOfCourse = (id: string) => media.filter((m) => m.courseId === id);
export const pageImg = (slug: string, n: number) => `/media/${slug}/${n}.jpg`;
export const pdfUrl = (slug: string) => `/media/${slug}.pdf`;

export const tools = [
  { no: "01", name: "WUDS FIT PLAN", who: "สำหรับนักเรียน ม.4", url: "https://wuds-fit-plan.vercel.app",
    desc: "ออกแบบโปรแกรมออกกำลังกายของตัวเอง ส่งครูตรวจ ลงมือทำ บันทึกผล แล้วสะท้อนผล",
    listTitle: "ขั้นตอนการใช้งาน", list: ["ออกแบบโปรแกรมของตัวเอง", "ส่งครูตรวจ", "ลงมือทำตามโปรแกรม", "บันทึกผล", "สะท้อนผล"], courseId: "p31101" },
  { no: "02", name: "SAMS", who: "ใช้ทั้งโรงเรียน", url: "https://sams-wuds.vercel.app",
    desc: "ระบบรายงานผลการเรียนของโรงเรียน วิเคราะห์ข้อสอบรายข้อ ให้ AI ช่วยสรุป และเตือนเมื่อมีนักเรียนกลุ่มเสี่ยง",
    listTitle: "สิ่งที่ระบบทำได้", list: ["รายงานผลการเรียน", "วิเคราะห์ข้อสอบรายข้อ", "AI ช่วยสรุปผล", "เตือนเมื่อมีนักเรียนกลุ่มเสี่ยง"], courseId: "" },
  { no: "03", name: "WSCS", who: "สำหรับครูที่ปรึกษาทั้งโรงเรียน", url: "https://studentcare-vercel.vercel.app/",
    desc: "StudentCare ระบบการดูแลช่วยเหลือนักเรียน ช่วยคัดกรองนักเรียนเพื่อการดูแลแบบรายบุคคล",
    listTitle: "สิ่งที่ระบบทำได้", list: ["คัดกรองนักเรียนเพื่อการดูแลรายบุคคล", "คัดกรองภาวะเสี่ยงด้านอารมณ์และสังคม", "คัดกรองภาวะเสี่ยงด้านจิตใจ", "คัดกรองภาวะเสี่ยงด้านสติปัญญา"], courseId: "" },
];

export const EMAIL = "siwakorn.ka@wu.ac.th";
export const PORTFOLIO_URL = "https://claude.ai/artifact/4HtwdJQxpVyZDgzLBLSbUi";
export const QUOTE = ["“ไม่ใช่แค่สอนให้เล่นกีฬาเป็น แต่สอนให้รู้จักวินัย ", "ความรับผิดชอบ การทำงานเป็นทีม ", "และการก้าวข้ามขีดจำกัดของตัวเอง”"];

export const homeCourses = [
  { id: "p11101", code: "พ11101", name: "สุขศึกษาและพลศึกษา (ว่ายน้ำ)", level: "ป.1", n: "10 หน่วย" },
  { id: "p21101", code: "พ21101", name: "สุขศึกษา", level: "ม.1", n: "4 หน่วย" },
  { id: "p31101", code: "พ31101", name: "สุขศึกษาและพลศึกษา (Weight Training)", level: "ม.4", n: "4 หน่วย", hot: true },
  { id: "p21103", code: "พ21103", name: "พลศึกษา (ว่ายน้ำ)", level: "ม.1", n: "5 หน่วย" },
  { id: "p30204", code: "พ30204", name: "ฟุตซอล", level: "ม.4–6", n: "5 หน่วย" },
  { id: "club", code: "ชุมนุม", name: "Sport Analysis (วิเคราะห์กีฬา)", level: "ม.1 และ ม.4", n: "20 สัปดาห์" },
];

export const about = {
  facts: [
    ["กลุ่มสาระการเรียนรู้", "สุขศึกษาและพลศึกษา"],
    ["ฝ่ายงาน", "ฝ่ายพัฒนานักเรียนและทักษะชีวิต"],
    ["ครูที่ปรึกษา", "ชั้นมัธยมศึกษาปีที่ 4"],
    ["รายวิชาที่สอน", "พ11101 · พ21101 · พ31101 · พ21103 · พ30204 · ชุมนุมวิเคราะห์กีฬา"],
    ["การศึกษา", "การศึกษาบัณฑิต (กศ.บ.) สาขาวิชาพลศึกษา คณะพลศึกษา มหาวิทยาลัยศรีนครินทรวิโรฒ"],
  ],
  path: [
    ["2569 – ปัจจุบัน", "โรงเรียนสาธิตมหาวิทยาลัยวลัยลักษณ์", "ครูกลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา"],
    ["2568 – 2569", "โรงเรียนท่าศาลาประสิทธิ์ศึกษา", "ครูกลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา"],
    ["2567", "โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ปทุมวัน", "ฝึกประสบการณ์สอน"],
    ["2567", "Gl. Rye Skoles, Gl. Rye, Denmark", "ฝึกประสบการณ์สอนในต่างประเทศ"],
  ],
  skills: [
    ["ผู้ฝึกสอนกีฬายูยิตสูระดับชาติ", "Class B"], ["ผู้ฝึกสอนกีฬายูโด", "Level C"],
    ["ว่ายน้ำและการช่วยชีวิตทางน้ำ", ""], ["เวทเทรนนิ่ง", ""], ["กีฬาต่อสู้", ""], ["กรีฑา", ""],
  ],
};
