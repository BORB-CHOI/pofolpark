import {
  Box,
  Grid,
  Text,
  Stack,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Site() {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Link to={`/sites`}>
      <VStack alignItems={"flex-start"}>
        {/* Web 사이트 모양 */}
        <Stack
          w="100%"
          height={"280px"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={1}
          rounded="2.5em"
          border="1px solid"
        >
          {/* {imageUrl ? (
            <Image objectFit={"cover"} minH="280" src={imageUrl} />
          ) : (*/}

          {/* )}  */}

          <Box
            w="87%"
            h="85%"
            border="1px solid"
            position="relative"
            overflow={"hidden"}
          >
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
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text display={"block"} noOfLines={1} fontSize="sm">
              아직 비었습니다
            </Text>
          </Grid>
        </Box>
      </VStack>
    </Link>
  );
}
