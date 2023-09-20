import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box w={"full"} my={5}>
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
        transform={"translate(0rem, -3rem)"}
      ></Box>

      {/* Footer Company Describe */}
      <Stack
        direction={{ base: "column", md: "row" }}
        my={5}
        align="center"
        justify="center"
      >
        <Text>@too_simple_dev</Text>
      </Stack>
    </Box>
  );
}
