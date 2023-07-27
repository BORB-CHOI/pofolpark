import {
  Box,
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
          <Box w="89%" border="1px solid" overflow={"hidden"}>
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
            {site01 ? (
              <Box style={{ aspectRatio: 16 / 9 }} bg={bgColor}>
                <Image
                  style={{ aspectRatio: 16 / 9 }}
                  objectFit={"cover"}
                  src={site01}
                />
              </Box>
            ) : (
              <Box style={{ aspectRatio: 16 / 9 }} bg={bgColor}></Box>
            )}
          </Box>
        </Stack>
        <Box w={"100%"}>
          <Text
            display={"block"}
            textAlign={"center"}
            noOfLines={1}
            fontSize="md"
          >
            {title}
          </Text>
        </Box>
      </VStack>
    </Link>
  );
}
