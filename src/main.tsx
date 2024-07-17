import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "primereact/resources/themes/viva-light/theme.css";
import { AuthProvider } from "./src/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
