import MainLayout from "../Layouts/MainLayout";

const footerItems = [
  {
    title: "INK UNDER SKIN",
    desc: "Hey there! We're Ink Under Skin, and we've been turning skin into awesome art since 2013! Whether you want a tiny butterfly or a full dragon sleeve, our artists can literally do it all. Come hang out with us and let's create something amazing together!",
  },
];
const sidebarItems = [
  { id: "01", desc: "HOME" },
  { id: "02", desc: "ARTISTS" },
  { id: "03", desc: "GALERY" },
  { id: "04", desc: "FLASH DEALS" },
  { id: "05", desc: "CONTACT US" },
];

export default function HomePage() {
  return (
    <MainLayout
      hero={
        <div className="px-[25px] py-[31px]">
          <img src="images/demo/demo-hero.png" alt="" />
        </div>
      }
      footer={
        <div className="flex">
          {footerItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col font-Primary text-secondary"
            >
              <h1 className="text-[64px]">{item.title}</h1>
              <p className="text-[16px]">{item.desc}</p>
            </div>
          ))}
        </div>
      }
      sidebar={
        <div className="w-full flex flex-col">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b p-[10px] font-Primary text-secondary"
            >
              <p>{item.id}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
