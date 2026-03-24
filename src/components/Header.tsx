const buttonsList = ["HOME", "ARTISTS", "GALERY", "FLASH DEALS", "CONTACT US"];

export default function Header() {
  return (
    <header className="w-full  bg-black border border-solid border-white/70">
      <div className="flex flex-row justify-between">
        {/* logo and button list layouts */}
        <div className="flex w-full">
          {/* images logo */}
          <img src="src/assets/icons/logo.png" alt="IUS logo" className="w-[13.3dvw] h-auto p-[1.6dvw]" />
          {/* menu buttons */}
          <nav className="flex">
            {buttonsList.map((item, index) => (
              <div key={index} className=" py-[2.9dvw] px-[0.6dvw]">
                <p className="text-white text-center">{item}</p>
              </div>
            ))}
          </nav>
        </div>
        {/* date */}
        <div className="shrink-0 whitespace-nowrap">
          <p className="text-white text-[16px] text-start py-[2.9dvw] pr-[15px]">JULY / 05 / 2025  |  10 : 20 PM</p>
        </div>
      </div>
    </header>
  );
}
