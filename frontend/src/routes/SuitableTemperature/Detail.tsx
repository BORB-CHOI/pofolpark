import { Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getWeatherDetail } from "../../utils/api";

const Detail = () => {
  const { id } = useParams();

  const { data } = useQuery(["country", id], getWeatherDetail);

  // "http://openweathermap.org/img/w/" + iconcode + ".png"

  console.log(data);
  return (
    <Stack minH={"70vh"}>
      <Text>Detail Page</Text>
    </Stack>
  );
};

export default Detail;
