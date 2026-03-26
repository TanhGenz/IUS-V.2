import type { ReactNode } from "react";
import Header from "../components/Header";

// Định nghĩa các "slots" mà Layout này chấp nhận
interface MainLayoutProps {
  sidebar?: ReactNode;
  footer?: ReactNode;
  hero?: ReactNode;
  children?: ReactNode; // 'children' mặc định là nội dung chính (Main Content)
}

const MainLayout = ({ hero, footer, sidebar, children }: MainLayoutProps) => {
  return (
    <div className="w-full max-w-full">
      <Header />

      {/* hero, footer, sidebar layouts */}
      <div className="flex w-full h-auto bg-black">
          {/* hero, footer layouts*/}
          <div className="flex flex-col w-[1137px]">
              {hero && (
                <>
                    {hero}
                </>
              )}
              {footer && (
                <footer className="p-20px">
                    {footer}
                </footer>
              )}
          </div>

          
      </div>



    </div>
  );
}

export default MainLayout;