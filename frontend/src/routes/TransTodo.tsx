import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ITodoVariables } from "../types";
import { TbTargetArrow } from "react-icons/tb";
import { RiEmotionLine } from "react-icons/ri";
import { transformTodo } from "../utils/api";
import { useState } from "react";

const COUNTDOWN = 10;

function TransTodo() {
  // useForm 덕분에 일일이 onChange, value를 설정해줄 필요가 없다.
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const { register, handleSubmit } = useForm<ITodoVariables>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [goal, setGoal] = useState("");
  const [explain, setExplain] = useState("");
  const [isGnerate, setIsGenerate] = useState(false);
  const [count, setCount] = useState(COUNTDOWN);

  const mutation = useMutation(transformTodo, {
    // onSuccess가 사실상 then과 같은 역할을 한다.
    onSuccess: (data: any) => {
      // Special to do: 라라라라라 | Description: 아아아아 <--- 데이터를 가공하는 과정.
      try {
        console.log(data.message.content);
        const [specialToDo, description] = data.message.content.split("|");
        setGoal(specialToDo.split(":")[1]);
        setExplain(description.split(":")[1]);
        onOpen();
        setIsGenerate(true);

        // 5초 카운트 다운
        const timerId = setInterval(() => setCount((prev) => prev - 1), 1000);

        // 5초 후에 정지
        setTimeout(() => {
          clearInterval(timerId);
          setIsGenerate(false);
          setCount(COUNTDOWN);
        }, COUNTDOWN * 1000);
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
    },
  });

  const onSubmit = (data: ITodoVariables) => {
    // api로 어떤 요청을 보내는 것을 mutation이라고 한다. request와 동일한 개념이다.
    mutation.mutate(data);
  };

  return (
    <VStack>
      <VStack>
        <Heading
          as="h1"
          mt={70}
          mb={10}
          size="xl"
          textAlign={"center"}
          fontFamily={"Black Han Sans"}
          fontWeight={"light"}
        >
          당신을 위한 특별한 To Do Generator
        </Heading>
        <Text>기술 사정상 10초에 한 번씩만 생성 가능합니다!</Text>
      </VStack>
      <Stack
        h={"60vh"}
        justifyContent={"center"}
        alignItems={"center"}
        as="form"
        pb={40}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Modal
          isCentered
          onClose={onClose}
          size="md"
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m={7}>{goal}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack
                bg={bgColor}
                borderRadius={"lg"}
                p={5}
                textAlign={"center"}
              >
                <Text fontSize={"md"} fontWeight={"bold"}>
                  {explain}
                </Text>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <InputGroup w={300}>
          <InputLeftElement
            children={
              <Box color="gray.500">
                <RiEmotionLine />
              </Box>
            }
          />
          <Input
            {...register("condition", { required: true })}
            variant={"filled"}
            placeholder="Your Condition"
          />
        </InputGroup>
        <InputGroup w={300}>
          <InputLeftElement
            children={
              <Box color="gray.500">
                <TbTargetArrow />
              </Box>
            }
          />
          <Input
            {...register("todo", { required: true })}
            variant={"filled"}
            placeholder="Your 'To Do'"
          />
        </InputGroup>
        <Button
          type="submit"
          isLoading={mutation.isLoading}
          isDisabled={isGnerate ? true : false}
        >
          {isGnerate ? count : "Generate"}
        </Button>
      </Stack>
    </VStack>
  );
}

export default TransTodo;
