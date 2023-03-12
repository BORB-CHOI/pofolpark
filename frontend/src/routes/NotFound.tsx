import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <VStack >
            <Heading>페이지를 찾을 수 없습니다.</Heading>
            <Text>당신을 길을 잃었어요.</Text>
            <Link to ="/">
                <Button colorScheme={"red"} variant={"link"}>
                    Go home &rarr;
                </Button>
            </Link>
        </VStack>
    );
}