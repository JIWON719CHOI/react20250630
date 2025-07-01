import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FaBeer } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import App16 from "./App16.jsx";
import App17 from "./App17.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App17 />
  </StrictMode>,
);

// alt ctrl o 누르면 안쓰는 import 정리 됨
