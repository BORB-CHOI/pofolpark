import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Spinner,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsEye } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { IoWaterOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getWeatherDetail } from "../../utils/api";
import { WeatherDetail } from "../../types";

const Detail = () => {
  const { id } = useParams();
  const boxBgColor = useColorModeValue("blackAlpha.900", "white");
  const boxTextColor = useColorModeValue("white", "black");

  const { isLoading, data } = useQuery<WeatherDetail>(
    ["country", id],
    getWeatherDetail
  );

  return (
    <Stack
      minH={"70vh"}
      w={"full"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <Card minH={"70vh"} w={"full"} maxW={"md"} py={5}>
          <CardBody
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading size="md" mb={5}>
              {data?.db_data.country_localized_name} -{" "}
              {data?.db_data.localized_name}
            </Heading>
            <Image
              w={"16"}
              mt={3}
              border="1px solid"
              rounded={"base"}
              alt="flag"
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data?.db_data.country_code}.svg`}
            />
            <Box>
              <Heading fontSize="8xl">
                {data && Math.round(data?.api_data.main.temp)}°C
              </Heading>
            </Box>
            <Box my={5}>
              <Text fontSize="sm">{data?.api_data.weather[0].description}</Text>
              <Text fontSize="sm">
                체감 온도 : {data && Math.round(data?.api_data.main.feels_like)}
                °C
              </Text>
              <Text fontSize="sm">
                {data && Math.round(data?.api_data.main.temp_max)}°C /{" "}
                {data && Math.round(data?.api_data.main.temp_min)}°C
              </Text>
            </Box>
            <HStack
              bgColor={boxBgColor}
              textColor={boxTextColor}
              p={5}
              rounded={"base"}
              spacing="4"
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <BiWind size={40} />
                <Text fontSize="lg" fontWeight={"bold"}>
                  {data?.api_data.wind.speed}m/s
                </Text>
                <Text fontSize="xs">Wind</Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <IoWaterOutline size={40} />
                <Text fontSize="lg" fontWeight={"bold"}>
                  {data?.api_data.main.humidity}%
                </Text>
                <Text fontSize="xs">Humidity</Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <BsEye size={40} />
                <Text fontSize="lg" fontWeight={"bold"}>
                  {data && data?.api_data.visibility / 1000}km
                </Text>
                <Text fontSize="xs">visibility</Text>
              </Box>
            </HStack>
          </CardBody>
        </Card>
      )}
    </Stack>
  );
};

export default Detail;
