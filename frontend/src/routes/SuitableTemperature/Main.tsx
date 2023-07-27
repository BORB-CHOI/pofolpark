import { IWeatherCountries, IWeatherCountry } from "../../types";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import jsonData from "../../assets/weather.json";
import { Link, useNavigate } from "react-router-dom";
import { sortData } from "../../utils/suitableTemperatureUtils";

interface IFormInputs {
  keyword: string;
}

const INITIAL_TEMPERATURES = [20, 25];
const INITIAL_SORTBY = 0;

const List = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const { register, handleSubmit } = useForm<IFormInputs>();
  const [data] = useState<IWeatherCountries>(jsonData);
  const [displayData, setDisplayData] = useState<IWeatherCountries>();
  const [temperatures, setTemperatures] =
    useState<number[]>(INITIAL_TEMPERATURES);
  const [sortBy, setSortBy] = useState<number>(INITIAL_SORTBY);
  // const { isLoading, data } = useQuery(vscode-file://vscode-app/c:/Users/qzsec/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html"suitable-temperature", () => {
  //   return fetch("http://localhost:8080/suitable-temperature").then((res) =>
  //     res.json()
  //   );
  // });

  const onValid = (validData: IFormInputs) => {
    navigate(
      `search?keyword=${validData.keyword}&temp0=${temperatures[0]}&temp1=${temperatures[1]}&sortNum=${sortBy}`
    );
  };

  const ClickSortBy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    Number(e.currentTarget.value) ? setSortBy(1) : setSortBy(0);
  };

  useEffect(() => {
    setDisplayData(sortData("", data, temperatures, sortBy));
  }, []);

  return (
    <Stack minH={"70vh"}>
      {/* 메인 메시지 영역 */}
      <VStack py={10} userSelect={"none"}>
        <Box fontFamily={"Black Han Sans"}>
          <Text display={"inline"} fontSize="5xl">
            춥다면 춥지 않으면 된다. 덥다면 덥지 않으면 된다.
          </Text>
        </Box>

        <Stack>
          <Text fontSize="lg" color={"gray.400"}>
            환경 탓, 날씨 탓 해봤자 뭐가 바뀌나요?
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="lg" color={"gray.400"}>
            선택은 여러분에게 달렸습니다.
          </Text>
        </Stack>
      </VStack>
      <Stack w={"100%"} h={"4rem"} display={"flex"}>
        <form onSubmit={handleSubmit(onValid)}>
          <FormControl>
            <Center>
              <Menu>
                <MenuButton as={Button}>
                  {sortBy ? (
                    <FaTemperatureArrowDown />
                  ) : (
                    <FaTemperatureArrowUp />
                  )}
                </MenuButton>
                <MenuList zIndex={2}>
                  <MenuItem onClick={ClickSortBy} value={0}>
                    <FaTemperatureArrowUp />
                  </MenuItem>
                  <MenuItem onClick={ClickSortBy} value={1}>
                    <FaTemperatureArrowDown />
                  </MenuItem>
                </MenuList>
              </Menu>
              <Input
                {...register("keyword")}
                w={"30rem"}
                id="keyword"
                placeholder="국가명 or 도시명 입력"
              />
              <Button type="submit" colorScheme="teal" variant="outline">
                Filter
              </Button>
            </Center>
          </FormControl>
        </form>
      </Stack>

      <VStack>
        <Card px={5} py={1} fontFamily={"fira-sans"} fontWeight={600}>
          <Text fontSize={"xl"}>
            {temperatures[0]}°C ~ {temperatures[1]}°C
          </Text>
        </Card>
        <RangeSlider
          min={-20}
          max={40}
          w={{ base: "20rem", md: "30rem", lg: "40rem" }}
          my={5}
          defaultValue={[temperatures[0], temperatures[1]]}
          onChange={(value) => {
            setTemperatures(value);
          }}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <Tooltip label={`${temperatures[0]}`}>
            <RangeSliderThumb boxSize={6} index={0} />
          </Tooltip>
          <Tooltip label={`${temperatures[1]}`}>
            <RangeSliderThumb boxSize={6} index={1} />
          </Tooltip>
        </RangeSlider>
      </VStack>

      <VStack spacing={5}>
        {displayData?.slice(0, 5).map((country: IWeatherCountry, index) => {
          return (
            <Link
              to={`/suitable-temperature/${country.Key}/${country.GeoPosition.Latitude}/${country.GeoPosition.Longitude}`}
              key={index}
            >
              <Grid
                boxShadow="lg"
                py="1"
                rounded="2xl"
                bg={bgColor}
                w={{ base: "xs", md: "md", lg: "3xl" }}
                templateColumns="repeat(4, 1fr)"
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Image
                  w={"16"}
                  alt="flag"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.Country.ID}.svg`}
                />
                <Text>{country.Country.LocalizedName}</Text>
                <Text>{country.LocalizedName}</Text>
                <Text>
                  {country.Temperature.Metric.Value} °
                  {country.Temperature.Metric.Unit}
                </Text>
              </Grid>
            </Link>
          );
        })}
        {/* 더보기 */}
        <Button
          onClick={() => {
            navigate("search");
          }}
          colorScheme="teal"
          variant="outline"
        >
          더보기
        </Button>
      </VStack>
    </Stack>
  );
};

export default List;
