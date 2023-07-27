import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <VStack
        fontFamily={"Black Han Sans"}
        h={"70vh"}
        display={"flex"}
        justify={"center"}
        align={"center"}
      >
        <Text fontSize={"8xl"}>페이지를 찾을 수 없습니다.</Text>
        <Text
          mb={5}
          fontSize="2xl"
          color={"gray.400"}
          fontFamily={"sans-serif"}
          fontWeight={600}
        >
          당신은 길을 잃었어요.
        </Text>
        <Link to="/">
          <Button colorScheme={"red"} variant={"link"}>
            Go home &rarr;
          </Button>
        </Link>
      </VStack>
      <Footer />
    </>
  );
}
