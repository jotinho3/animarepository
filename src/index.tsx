import React from "react";
import ReactDOMClient from "react-dom/client";
import { PreviewColorlibCom } from "./screens/PreviewColorlibCom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PreviewColorlibCom />);
