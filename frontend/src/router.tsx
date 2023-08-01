import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import TransTodo from "./routes/TransTodo";
import SuitableTemperatureMain from "./routes/SuitableTemperature/Main";
import SuitableTemperatureSearch from "./routes/SuitableTemperature/Search";
import SuitableTemperatureDetail from "./routes/SuitableTemperature/Detail";
// What the fuck

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "suitable-temperature",
        children: [
          {
            path: "",
            element: <SuitableTemperatureMain />,
          },
          {
            path: "search",
            element: <SuitableTemperatureSearch />,
          },
          {
            path: ":id",
            element: <SuitableTemperatureDetail />,
          },
        ],
      }, // {
      //   path: "trans-todo",
      //   element: <TransTodo />,
      // },
    ],
  },
]);

export default router;
