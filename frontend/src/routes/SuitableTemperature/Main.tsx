import { IWeatherCountry } from "../../types";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  Grid,
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

import { Link, useNavigate } from "react-router-dom";
import { sortData } from "../../utils/suitableTemperatureUtils";
import { getAllWeather } from "../../api";

interface IFormInputs {
  keyword: string;
}

const INITIAL_TEMPERATURES = [20, 25];
const INITIAL_SORTBY = 0;

const List = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const { register, handleSubmit } = useForm<IFormInputs>();
  // const [data] = useState<IWeatherCountry[]>(jsonData);
  const [displayData, setDisplayData] = useState<IWeatherCountry[]>();
  const [temperatures, setTemperatures] =
    useState<number[]>(INITIAL_TEMPERATURES);
  const [sortBy, setSortBy] = useState<number>(INITIAL_SORTBY);
  const { data } = useQuery<IWeatherCountry[]>(["all-weather"], getAllWeather);

  const onValid = (validData: IFormInputs) => {
    navigate(
      `search?keyword=${validData.keyword}&temp0=${temperatures[0]}&temp1=${temperatures[1]}&sortNum=${sortBy}`
    );
  };

  const ClickSortBy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    Number(e.currentTarget.value) ? setSortBy(1) : setSortBy(0);
  };

  useEffect(() => {
    data && setDisplayData(sortData("", data, temperatures, sortBy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Stack minH={"70vh"} w={{ base: "xs", md: "md", lg: "3xl" }}>
      {/* 메인 메시지 영역 */}
      <VStack py={10} userSelect={"none"}>
        <Box fontFamily={"Black Han Sans"}>
          <Text display={"inline"} fontSize="3xl">
            춥다면 춥지 않으면 된다.
          </Text>
          <br />
          <Text display={"inline"} fontSize="3xl">
            덥다면 덥지 않으면 된다.
          </Text>
        </Box>

        <Stack>
          <Text fontSize="md" color={"gray.400"}>
            내가 좋아하는 날씨가 어디 있을지 한번 찾아봅시다.
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
            <Link to={`/suitable-temperature/${country.key}`} key={index}>
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
