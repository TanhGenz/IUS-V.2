import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

// Định nghĩa các "slots" mà Layout này chấp nhận
interface MainLayoutProps {
  sidebar?: ReactNode;
  footer?: ReactNode;
  hero?: ReactNode;
}

const MainLayout = ({ hero, footer, sidebar }: MainLayoutProps) => {
  return (
    <div className="w-full max-w-full h-full">
      {/* Header */}
      <Header />

      {/* hero, footer, sidebar layouts */}
      <div className="flex w-full h-auto bg-black">
        {/* hero, footer layouts*/}
        <div className="flex flex-col flex-1 border-l border-r border-b">
          {hero && <div className="mx-auto">{hero}</div>}
          {footer && (
            <footer className="flex justify-between gap-14 px-5 pb-2 border-t">
              {footer}
              <div className="flex items-center ">
                <p className="font-Primary text-[16px] text-secondary">
                  TO TATTOO GALLERY
                </p>
                <img src="decor/arrow.png" alt="" />
              </div>
            </footer>
          )}
        </div>

        {/* RIGHT: sidebar */}
        {sidebar && (
          <aside
            
            className="w-[303px] border-r border-b flex flex-col justify-between">
            {sidebar}
            <div className="cursor-pointer w-full px[106px] py-[18.5px] bg-white text-center font-Primary text-black">
              <p>BOOK NOW</p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
