import MainLayout from "../Layouts/MainLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../ultils/string";
const MenuArtistList = [
  {
    id: "01",
    title: "BANH",
    desc: "Yo! Banh here, I run this place - Ink Under Skin. Been doing all kinds of styles but traditional and neo-traditional is where I shine. Those bold lines and sick colors? That's my jam. Hit me up and let's get you some fire ink!",
  },
  {
    id: "02",
    title: "NAM-N2N",
    desc: "What's up! I'm Nam, but you can call me N2N. I've been tattooing for about 6-7 years now, and I'm totally obsessed with Asian flash designs - dragons, koi fish, cherry blossoms, you name it! Though I gotta say, new school style always gets me excited too with all those crazy colors and fun characters.",
  },
  {
    id: "03",
    title: "TRINH - REKLEZZ",
    desc: "Hey there! Trình here, aka Reklezz. Been tattooing for about 6-7 years and I focus mainly on realistic work and blackwork. If you're looking for clean portraits or solid black pieces, let's talk!",
  },

];

// Định nghĩa các ảnh của các artist
// Record<string, string[]> là một object có key là string và value là một mảng các string
// key là tên của artist
// value là một mảng các ảnh của artist
// ảnh được lưu trữ trong thư mục images/artists/arts-<tên-artist>/<tên-ảnh>.png
// tên ảnh là <tên-artist>-<số-thứ-tự>.png
// số thứ tự là 01,02, 03, ...
// tên artist là Banh, Nam-N2N, Trinh, Hieu
// tên ảnh là Banh-01.png, Banh-02.png, Banh-03.png, ...
const artistsImages: Record<string, string[]> = {
  "BANH": [
    "/images/artists/arts-Banh/Banh-01.png",
    "/images/artists/arts-Banh/Banh-02.png",
    "/images/artists/arts-Banh/Banh-03.png",
  ],
  "NAM-N2N": [
    "/images/artists/arts-Nam/Nam-01.png",
    "/images/artists/arts-Nam/Nam-02.png",
    "/images/artists/arts-Nam/Nam-03.png",
  ],
  "TRINH - REKLEZZ": [
    "/images/artists/arts-Trinh/Trinh-1.png",
    "/images/artists/arts-Trinh/Trinh-2.png",
    "/images/artists/arts-Trinh/Trinh-3.png",
  ],

};

export default function ArtistPage() {
  const [currentArtist, setCurrentArtist] = useState("BANH");
  const [currentImage, setCurrentImage] = useState(0); // ← mặc định ảnh đầu tiên

  // Reset về ảnh đầu tiên khi đổi artist
  const handleSelectArtist = (title: string) => {
    setCurrentArtist(title);
    setCurrentImage(0); // ← reset
  };

  //  auto sroll 
  useEffect(() => {
    const images = artistsImages[currentArtist];

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1  // nếu ảnh cuối → quay lại đầu
      );
    }, 3000); // 3 giây đổi 1 lần
    return () => clearInterval(interval); // cleanup khi đổi artist
  }, [currentArtist]); // reset khi đổi artist


  return <MainLayout hero={
    <div className=" py-[10px]">
      <div className="flex flex-col gap-2 items-center justify-center">
        {/* Ảnh lớn hiển thị chính */}
        <img
          src={artistsImages[currentArtist]?.[currentImage]}
          alt={currentArtist}
          className="w-[52dvw] object-cover"
        />

        {/* Thumbnails */}
        <div className="flex gap-5">
          {artistsImages[currentArtist]?.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={currentArtist}
              onClick={() => setCurrentImage(index)}
              className={cn("w-[80px] h-[80px] object-cover cursor-pointer", {
                "border-2  border-Primary": currentImage === index, // thumbnail đang chọn
              })}
            />
          ))}
        </div>
      </div>
    </div>}

    // Footer
    footer={
      <div className="flex flex-1">
        {MenuArtistList.filter((item) => item.title === currentArtist).map((item) => (
          <div
            key={item.id}
            className={cn("flex flex-col font-Primary text-secondary")}

          >
            <h1 className="text-[64px]">{item.title}</h1>
            <p className="text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    }

    // Side bar
    sidebar={
      <div className="w-full flex flex-col">
        {MenuArtistList.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelectArtist(item.title)}
            className={cn(
              "cursor-pointer flex justify-between border-b p-[10px] font-Primary text-secondary",
              {
                "bg-Primary": currentArtist === item.title, // đang chọn
                "bg-none": currentArtist !== item.title, // chưa chọn
              }
            )}
          >
            <p>{item.id}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    }
  />;

}
