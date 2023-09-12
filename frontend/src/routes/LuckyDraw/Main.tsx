import { Box, Center, Heading, Img } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";

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

const leverBox = {
  initial: {
    rotate: -45,
  },
  animate: {
    rotate: [0, 90, 180, 270, 360],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const lever = {};

const Main = () => {
  const [leverBoxScope, leverAnimate] = useAnimate();

  const enterLever = () => {
    leverAnimate(leverBoxScope.current, { scale: 1.2 });
  };

  const leaveLever = () => {
    leverAnimate(leverBoxScope.current, { scale: 1 });
  };

  const clickLever = () => {
    leverAnimate(leverBoxScope.current, { scale: [0.7, 1] }, { duration: 0.2 });
  };

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      minH={"100vh"}
      bgColor={"#04804A"}
      display={"flex"}
      alignItems={"end"}
      justifyContent={"center"}
      overflow={"hidden"}
    >
      {/* Box 안에 이미지를 넣어서, 이미지 대신 박스를 Rotate하면 만사 해결. */}
      <Heading
        as={motion.h2}
        fontSize={"7xl"}
        variants={title}
        initial={"hidden"}
        animate={"visible"}
      >
        INSTA BRAIN
      </Heading>
      <Center w={"full"} bottom={0}>
        <Box h={"40vh"} position={"relative"}>
          <Img
            h={"full"}
            objectFit={"contain"}
            src={
              process.env.PUBLIC_URL + "/assets/images/lucky-draw/roulette.png"
            }
            alt="Roulette"
          />
          <Box
            as={motion.div}
            ref={leverBoxScope}
            style={{ aspectRatio: 1 / 1 }}
            w={"full"}
            top={"-1%"}
            position={"absolute"}
            variants={leverBox}
            initial="initial"
            animate="animate"
          >
            <Img
              as={motion.img}
              bottom={"20%"}
              h={"75%"}
              margin={"0 auto"}
              objectFit={"contain"}
              position={"relative"}
              cursor="pointer"
              src={
                process.env.PUBLIC_URL + "/assets/images/lucky-draw/lever.png"
              }
              alt="Lever"
              variants={lever}
              onMouseEnter={enterLever}
              onMouseLeave={leaveLever}
              onClick={clickLever}
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Main;
