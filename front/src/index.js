import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "1054663224680-48hb1phvmjtnhm348rrp0bq8ko9pt6sl.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
