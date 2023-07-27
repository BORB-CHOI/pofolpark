import { Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { country, latitude, longitude } = useParams();

  const { data } = useQuery(
    ["country", country, latitude, longitude],
    async () => {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${country}`
      );
      return data;
    }
  );

  console.log(country, latitude, longitude);
  return (
    <Stack minH={"70vh"}>
      <Text>Detail Page</Text>
    </Stack>
  );
};

export default Detail;
