const buttonsList = ["HOME", "ARTISTS", "GALERY", "FLASH DEALS", "CONTACT US"];

export default function Header() {
  return (
    <header className="w-full  bg-black border border-solid border-white/70">
      <div className="flex flex-row justify-between">
        {/* logo and button list layouts */}
        <div className="flex w-full">
          {/* images logo */}
          <img
            src="icons/logo.png"
            alt="IUS logo"
            className="w-[192px] h-full p-[23px]"
          />
          {/* menu buttons layouts */}
          <nav className="flex">
            {buttonsList.map((item, index) => (
              <div key={index} className=" py-[42px] px-[10px] ">
                <p className="font-primary text-secondary text-[16px] font-medium">
                  {item}
                </p>
              </div>
            ))}
          </nav>
        </div>
        {/* date */}
        <div className="shrink-0 whitespace-nowrap">
          <p className="font-primary text-secondary text-[16px] font-medium py-[43px] pr-[15px]">
            JULY / 05 / 2025 | 10 : 20 PM
          </p>
        </div>
      </div>
    </header>
  );
}
