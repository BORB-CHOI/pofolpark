import { FaMoon, FaSun } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

import {
  Box,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(FaMoon, FaSun);
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Stack
        justifyContent={"space-between"}
        alignItems="center"
        py={2}
        px={10}
        direction={"row"}
      >
        <Box>
          <Link to={"/"}>
            <AiTwotoneHome size={"20"} />
          </Link>
        </Box>
        <HStack>
          <IconButton
            onClick={toggleColorMode}
            variant={"ghost"}
            aria-label="Toggle dark mode"
            icon={<Icon />}
          />
        </HStack>
      </Stack>
      <Box>
        <Box
          h={10}
          mx={{
            base: 5,
            lg: 10,
          }}
          rounded="md"
          border="2px solid"
          transform={"translate(0rem,0rem)"}
        ></Box>
        <Box
          w={"100%"}
          h={10}
          bgColor={bgColor}
          position="absolute"
          transform={"translate(0rem,-2rem)"}
        ></Box>
      </Box>
    </Box>
  );
}
