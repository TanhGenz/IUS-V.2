import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

// getElementById trả về HTMLElement | null; createRoot cần Element nên cần assert non-null
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Không tìm thấy phần tử #root");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
