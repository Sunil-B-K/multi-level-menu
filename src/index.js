import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Services from "./routes/Services";
import About from "./routes/About";
import WebDesign from "./routes/Web-design";
import WebDev from "./routes/Web-dev";
import Node from "./routes/Node";
import Php from "./routes/Php";
import Frontend from "./routes/Frontend";
import Seo from "./routes/Seo";

const router = createBrowserRouter([
  {
    element: <Root />,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "web-design",
        element: <WebDesign />,
      },
      {
        path: "web-dev",
        element: <WebDev />,
      },
      {
        path: "frontend",
        element: <Frontend />,
      },
      {
        path: "node",
        element: <Node />,
      },
      {
        path: "php",
        element: <Php />,
      },
      {
        path: "seo",
        element: <Seo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
