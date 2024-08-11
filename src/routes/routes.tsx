import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
