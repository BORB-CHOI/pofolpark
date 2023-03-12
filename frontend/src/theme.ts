import {
  extendTheme,
  useColorModeValue,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    black: "#000",
    white: "#fff",
  },
  bgColor: useColorModeValue("white", "gray.800"),
});

export default theme;
