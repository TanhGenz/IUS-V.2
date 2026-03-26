import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayOut from "./Layouts/MainLayout";

import HomePage from "./sections/HomePage";
// import ArtistPage from "./sections/ArtistPage";
// import GalleryPage from "./sections/GalleryPage";
// import ContactPage from "./sections/ContactPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          /* 1. Khai báo Layout bao bọc */
          element={<MainLayOut />}
        >
          {/* 2. Các trang con sẽ nhảy vào vị trí <Outlet /> của MainLayout */}
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
