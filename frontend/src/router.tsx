import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
// Suitable Temperature
import SuitableTemperatureMain from "./routes/SuitableTemperature/Main";
import SuitableTemperatureSearch from "./routes/SuitableTemperature/Search";
import SuitableTemperatureDetail from "./routes/SuitableTemperature/Detail";
// Insta Brain

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
      },
      // {
      //   path: "insta-brain",
      //   element: <InstaBrainMain />,
      // },
    ],
  },
]);

export default router;
