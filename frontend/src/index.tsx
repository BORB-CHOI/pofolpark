import "@fontsource/black-han-sans";
import "@fontsource/fira-sans";
import "@fontsource/noto-sans-kr";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./router";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={client}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </QueryClientProvider>
);

// App은 Router로 교체 됨

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
