import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../routes/NotFound";
import Movie from "../routes/Movie";
import TV from "../routes/TV";
import Detaily from "../routes/Detaily";
import Search from "./Search";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      { path: "/a", element: <NotFound /> },
      {
        path: "/tv",
        element: <TV />,
      },
      {
        path: "/detail/:id",
        element: <Detaily />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
export default router;
