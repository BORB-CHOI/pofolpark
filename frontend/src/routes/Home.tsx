import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Site from "../components/Site";
import SiteSkeleton from "../components/SiteSkeleton";
import { useQuery } from "react-query";
import { getSites } from "../utils/api";

export default function Home() {
  // const { isLoading: sitesIsLoading, data } = useQuery<[]>(["sites"], getSites);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 200);

  return (
    <Box
      w={"full"}
      px={{
        base: 5,
        lg: 10,
      }}
    >
      {/* 헤드라인 영역 */}
      <VStack py={10} userSelect={"none"}>
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
        w={"full"}
        mt={10}
        columnGap={8}
        rowGap={10}
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
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
            <Site
              title={"여름이 싫다면 여름이 아니면 된다."}
              link={"/suitable-temperature"}
              imgSrc={
                process.env.PUBLIC_URL +
                "/assets/images/suitableTemperature.png"
              }
            />
          </>
        )}
      </Grid>
    </Box>
  );
}
