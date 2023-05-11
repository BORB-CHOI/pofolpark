import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import TodoPage from "./routes/TodoPage";
import StateGenerator from "./routes/StateGenerator";

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
        path: "todo",
        element: <TodoPage />,
      },
      {
        path: "state-generator",
        element: <StateGenerator />,
      },
    ],
  },
]);


export default router;
