import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Site from "../components/Site";
import SiteSkeleton from "../components/SiteSkeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 200);

  return (
    <Box
      mx={{
        base: 5,
        lg: 10,
      }}
    >
      {/* 헤드라인 영역 */}
      <VStack py={10}>
        <Box fontFamily={"Black Han Sans"}>
          <Text display={"inline"} fontSize="7xl">
            너
          </Text>
          <Text display={"inline"} fontSize="5xl">
            무
          </Text>
          <Text display={"inline"} fontSize="7xl">
            {" "}
            단
          </Text>
          <Text display={"inline"} fontSize="5xl">
            순해서
          </Text>
          <Text display={"inline"} fontSize="7xl">
            {" "}
            죄
          </Text>
          <Text display={"inline"} fontSize="5xl">
            송합니다.
          </Text>
        </Box>

        <HStack>
          <Text fontSize="lg" color={"gray.400"}>
            하지만 이렇게라도 하지 않으면 개발이 산으로 가버리는 걸요
          </Text>
        </HStack>
      </VStack>

      {/* 콘텐츠 영역 */}
      <Grid
        mt={10}
        columnGap={4}
        rowGap={8}
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
      >
        {isLoading ? (
          <>
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
            <SiteSkeleton />
          </>
        ) : (
          <>
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
            <Site />
          </>
        )}
      </Grid>
    </Box>
  );
}
