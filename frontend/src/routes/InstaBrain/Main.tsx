import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const circle = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 100,
    },
  },
  hover: { scale: 1.2 },
  click: { scale: 0.8, transition: { duration: 0.1 } },
};

const title = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const Main = () => {
  const [IsStarting, setIsStarting] = useState<boolean>(false);

  const handleClick = () => setIsStarting((prev) => !prev);

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      minH={"100vh"}
      p={10}
      overflow="hidden"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      bgGradient="linear(to-b, #7928CA, #E94057, #F27121)"
    >
      {IsStarting ? (
        <Box
          as={motion.div}
          layoutId="layout-1"
          w="full"
          h="full"
          textAlign={"center"}
          rounded="lg"
          bgColor="rgba(255, 255, 255, 0.6)"
          backdropFilter="auto"
          backdropBlur="8px"
          overflowY={"scroll"}
        >
          <Heading
            as={motion.h2}
            fontSize={"7xl"}
            variants={title}
            initial={"hidden"}
            animate={"visible"}
          >
            INSTA BRAIN
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem rounded={"3xl"} backdropFilter="auto" backdropBlur="8px">
              lala
            </GridItem>
            <GridItem>lala</GridItem>
            <GridItem>lala</GridItem>
            <GridItem>lala</GridItem>
            <GridItem>lala</GridItem>
          </Grid>
        </Box>
      ) : (
        <Box
          as={motion.div}
          layoutId={"layout-1"}
          w={20}
          h={20}
          rounded={"full"}
          bgColor="rgba(255, 255, 255, 0.6)"
          cursor={"pointer"}
          onClick={handleClick}
          variants={circle}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="click"
        />
      )}
    </Box>
  );
};

export default Main;
