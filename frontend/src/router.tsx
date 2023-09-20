import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
// Suitable Temperature
import SuitableTemperatureMain from "./routes/SuitableTemperature/Main";
import SuitableTemperatureSearch from "./routes/SuitableTemperature/Search";
import SuitableTemperatureDetail from "./routes/SuitableTemperature/Detail";

// Lucky Draw
import LuckyDrawMain from "./routes/LuckyDraw/Main";

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
    ],
  },
  {
    path: "lucky-draw",
    element: <LuckyDrawMain />,
  },
]);

export default router;
