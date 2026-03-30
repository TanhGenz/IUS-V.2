import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./sections/HomePage";
// import ArtistPage from "./sections/ArtistPage";
// import GalleryPage from "./sections/GalleryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/artists" element={<ArtistPage />} /> */}
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
