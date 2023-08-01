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

import { useSearchParams } from "react-router-dom";
import { sortData } from "../../utils/suitableTemperatureUtils";
import { Link, useLocation } from "react-router-dom";
import { getAllWeather } from "../../utils/api";

interface IFormInputs {
  keyword: string;
}

const INITIAL_TEMP = [20, 25];
const INITIAL_SORTBY = 0;

const Search = (props: any) => {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const { register, handleSubmit } = useForm<IFormInputs>();
  // const [data] = useState<IWeatherCountries>(jsonData);
  const { isLoading, data } = useQuery<IWeatherCountries>(
    "all-weather",
    getAllWeather
  );
  const [displayData, setDisplayData] = useState<IWeatherCountries>();

  // parameters from the URL query
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [searchParams, setSearchParams] = useSearchParams(params);

  // state from the search bar
  const [temperatures, setTemperatures] = useState<number[]>([
    Number(searchParams.get("temp0")) || INITIAL_TEMP[0],
    Number(searchParams.get("temp1")) || INITIAL_TEMP[1],
  ]);
  const [sortBy, setSortBy] = useState<number>(
    Number(searchParams.get("sortNum")) || INITIAL_SORTBY
  );

  // const { isLoading, data } = useQuery(vscode-file://vscode-app/c:/Users/qzsec/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html"suitable-temperature", () => {
  //   return fetch("http://localhost:8080/suitable-temperature").then((res) =>
  //     res.json()
  //   );
  // });

  const onValid = (validData: IFormInputs) => {
    setSearchParams(
      new URLSearchParams({
        keyword: validData.keyword,
        temp0: temperatures[0].toString(),
        temp1: temperatures[1].toString(),
        sortNum: sortBy.toString(),
      })
    );
  };

  const ClickSortBy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    Number(e.currentTarget.value) ? setSortBy(1) : setSortBy(0);
  };

  useEffect(() => {
    data &&
      setDisplayData(
        sortData(searchParams.get("keyword") || "", data, temperatures, sortBy)
      );
  }, [searchParams]);

  return (
    <Stack minH={"70vh"} w={{ base: "xs", md: "md", lg: "3xl" }}>
      <VStack py={7} userSelect={"none"}>
        <Box fontFamily={"Black Han Sans"}>
          <Text display={"inline"} fontSize="5xl">
            적당한 온도 찾기
          </Text>
        </Box>
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
                defaultValue={searchParams.get("keyword") || ""}
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
        {displayData?.map((country: IWeatherCountry, index) => {
          return (
            <Link to={`/suitable-temperature/${country.key}`} key={index}>
              <Grid
                boxShadow="lg"
                py="6"
                rounded="2xl"
                bg={bgColor}
                w={{ base: "xs", md: "md", lg: "3xl" }}
                templateColumns="repeat(4, 1fr)"
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Image
                  w={"16"}
                  border="1px solid"
                  rounded={"base"}
                  alt="flag"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.country_code}.svg`}
                />
                <Text>{country.country_localized_name}</Text>
                <Text>{country.localized_name}</Text>
                <Text>{country.temperature_value}°C</Text>
              </Grid>
            </Link>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default Search;
