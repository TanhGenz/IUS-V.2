import type { ReactNode } from "react";
import Header from "../components/Header";

// Định nghĩa các "slots" mà Layout này chấp nhận
interface MainLayoutProps {
  sidebar?: ReactNode;
  footer?: ReactNode;
  hero?: ReactNode;
}

const MainLayout = ({ hero, footer, sidebar }: MainLayoutProps) => {
  return (
    <div className="w-full max-w-full">
      {/* Header */}
      <Header />

      {/* hero, footer, sidebar layouts */}
      <div className="flex w-full h-auto bg-black">
        {/* hero, footer layouts*/}
        <div className="flex flex-col flex-1 border-l border-r border-b">
          {hero && <div className="">{hero}</div>}
          {footer && <footer className="p-5 border-t">{footer}</footer>}
        </div>

        {/* RIGHT: sidebar */}
        {sidebar && (
          <aside className="w-[303px] border-r border-b flex flex-col justify-between">
            {sidebar}
            <div className="w-full px[106px] py-[18.5px] bg-white text-center font-Primary text-black">
              <p>BOOK NOW</p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
