import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Pages/Root";
import Home from "./components/Home";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {path: '/', element: <Home></Home> },

    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
