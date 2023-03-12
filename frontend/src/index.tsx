import "@fontsource/black-han-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

// App은 Router로 교체 됨
