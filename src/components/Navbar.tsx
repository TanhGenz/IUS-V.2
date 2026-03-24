const MenuList = [
    {id: "01", title: "STUDIO"},
    {id: "02", title: "ARTISTS"},
    {id: "03", title: "GALERY"},
    {id: "04", title: "SALE FLASH"},
    {id: "05", title: "CONTACT US"},

]
export default function Navbar() {
    return (
        <nav className="absolute right-0 w-[21dvw] h-auto bg-black border border-x border-b border-white/70">
            <div className="flex flex-col w-full gap-[238.5px]">
                <div className="flex flex-col">
                    {MenuList.map((item, index) => (
                        <div key={index} className="flex justify-between p-[10px]"> 
                            <p className="text-white">{item.id}</p>
                            <p className="text-white">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="text-black bg-white px-[107px] py-[18.5px] text-center"><p>Book Now</p></div>
            </div>
        </nav>
    );
}