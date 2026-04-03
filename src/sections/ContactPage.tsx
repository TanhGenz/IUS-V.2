import MainLayout from "../Layouts/MainLayout";
const sidebarItems = [
  { id: "01", title: "STUDIO" },
  { id: "02", title: "GOOGLE MAP" },
  { id: "03", title: "REVIEW US" },
];

const contactInfo = {
  "SOCIAL NETWORKS": [
    { label: "FACEBOOK", url: "https://www.facebook.com/i.u.s.93" },
    { label: "INSTAGRAM", url: "https://www.instagram.com/inkunderskin2013/" },
    { label: "TIKTOK", url: "https://www.tiktok.com/@ius2013" },
  ],
  "EMAIL - PHONE ": [
    {
      label: "inkunderskin2013@gmail.com",
      url: "mailto:inkunderskin2013@gmail.com",
    },
    { label: "090 315 7317", url: "tel:+84903157317" },
  ],
  ADRESS: {
    label: "ADDRESS",
    url: "27, Đường Số 2, Phường 4, Cư Xá Đô Thành, Quận 3",
  },
};

export default function ContactPage() {
  return <MainLayout hero={<div className=" py-[53px]"></div>} />;
}
