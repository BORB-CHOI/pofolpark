import {
  Box,
  Grid,
  Text,
  Stack,
  VStack,
  HStack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import site01 from "../assets/site01.png";

interface ISiteProps {
  title: string;
  link: string;
}

export default function Site({ title, link }: ISiteProps) {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Link to={link}>
      <VStack alignItems={"flex-start"}>
        {/* Web 사이트 모양 */}
        <Stack
          w="100%"
          paddingTop={"5%"}
          paddingBottom={"5%"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={1}
          rounded="2.5em"
          border="1px solid"
        >
          <Box
            w="89%"
            aspectRatio="16/9"
            border="1px solid"
            position="relative"
            overflow={"hidden"}
          >
            {site01 ? (
              <Image
                position={"absolute"}
                objectFit={"fill"}
                transform={"translateY(10%)"}
                zIndex={-1}
                src={site01}
              />
            ) : // <Box minH="280px" h="100%" w="100%" p={10} bg="green.400" />
            null}
            <HStack
              pl={1}
              h={4}
              alignItems={"flex-end"}
              borderBottom={"1px solid"}
            >
              <Box
                w={10}
                h={3}
                border="1px solid"
                borderBottom={0}
                bg={bgColor}
                borderTopRadius={5}
              ></Box>
              <Box
                w={10}
                h={3}
                border="1px solid"
                borderBottom={0}
                transform={"translateX(-0.85em)"}
                bg={bgColor}
                borderTopRadius={5}
              ></Box>
              <Box
                w={10}
                h={3}
                border="1px solid"
                borderBottom={0}
                transform={"translateX(-1.7em)"}
                bg={bgColor}
                borderTopRadius={5}
              ></Box>
            </HStack>
            {/* {imageUrl ? (
              <Image objectFit={"cover"} minH="280" src={imageUrl} />
            ) : ( */}
            <Box minH="280px" h="100%" w="100%" />
            {/* )} */}
          </Box>
        </Stack>
        <Box w={"100%"}>
          <Text
            display={"block"}
            textAlign={"center"}
            noOfLines={1}
            fontSize="sm"
          >
            {title}
          </Text>
        </Box>
      </VStack>
    </Link>
  );
}
