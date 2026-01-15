import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Pages/Root";
import Home from "./components/Home";
import "./index.css";
import NotFound from "./components/NotFound";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '*', element: <NotFound></NotFound> },

    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <FirebaseProvider>
    <RouterProvider router={router} />,
  </FirebaseProvider>
);
