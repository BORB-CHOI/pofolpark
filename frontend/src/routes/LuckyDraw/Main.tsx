import {
  Box,
  Center,
  Heading,
  Img,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getLuckyVedios } from "../../api";
import { videoItem } from "@src/types";
import { randomInt } from "crypto";

// 앤드류 채널 아이디 : UCCU2H8fnVx20POKCzFm-G5Q

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
  exit: (animateDelay: number) => ({
    opacity: 0,
    transition: { delay: animateDelay },
  }),
};

const leverBox = {
  initial: {
    rotate: -53,
  },
  animate: {
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const videoBox = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (animateDelay: number) => ({
    opacity: 1,
    borderRadius: "0px",
    y: 0,
    transition: {
      delay: animateDelay + 0.5,
      duration: 0.5,
    },
  }),
  animate_2: (animateDelay: number) => ({
    width: "90%",
    aspectRatio: 16 / 9,
    transition: {
      delay: animateDelay + 1,
      duration: 0.5,
    },
  }),
};

const video = {
  initial: {
    opacity: 0,
  },
  animate: (animateDelay: number) => ({
    opacity: 1,
    transition: {
      delay: animateDelay + 1,
    },
  }),
};

const ANIMATE_DELAY = 6;
const ANIMATE_REPEAT_DELAY = 2.5;

const Main = () => {
  const [leverBoxScope, leverAnimate] = useAnimate();
  const [videoBoxScope, videoBoxAnimate] = useAnimate();
  const [titleIsHide, setTitleIsHide] = useState(false);
  const [videoId, setVideoId] = useState<string>("");
  const [animateDelay, setAnimateDelay] = useState<number>(ANIMATE_DELAY);
  const { data, isLoading, mutate } = useMutation<videoItem[]>(
    "lucky_video",
    getLuckyVedios
  );

  useEffect(() => {
    setVideoId(() => {
      const videoId: string =
        (data && data[Math.floor(Math.random() * data.length)].id.videoId) ||
        "";
      return videoId;
    });
  }, [data]);

  const enterLever = () => {
    leverAnimate(leverBoxScope.current, { scale: 1.2 });
  };

  const leaveLever = () => {
    leverAnimate(leverBoxScope.current, { scale: 1 });
  };

  const clickLever = () => {
    leverAnimate(leverBoxScope.current, { scale: [0.7, 1] }, { duration: 0.2 });
    leverAnimate(
      leverBoxScope.current,
      { rotate: [360 + -53, 360 * 11 + -53] },
      { ease: [0.24, 0, 0.34, 1], delay: 0.2, duration: animateDelay }
    ).then(() => setAnimateDelay(ANIMATE_REPEAT_DELAY));
    mutate();
    setTitleIsHide(true);

    if (titleIsHide) {
      videoBoxAnimate(videoBoxScope.current, {
        borderRadius: "50%",
        width: "0%",
        aspectRatio: 1 / 1,
      }).then(() =>
        videoBoxAnimate(
          videoBoxScope.current,
          { borderRadius: "0px", width: "90%", aspectRatio: 16 / 9 },
          { delay: animateDelay + 0.5, duration: 0.5 }
        )
      );
    }
  };

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      minH={"100vh"}
      bgColor={"#04804A"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"end"}
      justifyContent={"center"}
      overflow={"hidden"}
      style={{ userSelect: "none" }}
    >
      <Box
        w={"full"}
        h={"full"}
        p={2}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        textAlign={"center"}
      >
        <AnimatePresence>
          {titleIsHide ? (
            <Center
              as={motion.div}
              ref={videoBoxScope}
              key={0}
              style={{ aspectRatio: 1 / 1 }}
              width={"3%"}
              maxW={{ base: "lg" }}
              rounded={"full"}
              position={"absolute"}
              bgColor={"#1D8C5C"}
              variants={videoBox}
              custom={animateDelay}
              initial={"initial"}
              animate={["animate", "animate_2"]}
            >
              {isLoading ? (
                <Spinner
                  as={motion.div}
                  color="#03663B"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: animateDelay + 1 },
                  }}
                />
              ) : (
                <motion.iframe
                  id="ytplayer"
                  title="ytplayer"
                  width={"100%"}
                  height={"100%"}
                  variants={video}
                  custom={animateDelay}
                  initial="initial"
                  animate="animate"
                  allow={"fullscreen"}
                  src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                />
              )}
            </Center>
          ) : (
            <Box
              as={motion.div}
              key={1}
              variants={title}
              custom={animateDelay}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
            >
              <Text
                as={motion.h2}
                fontFamily={"Noto Sans KR"}
                fontSize={"xl"}
                color={"white"}
              >
                나만의 영상을 찾을 때까지
                <br />
                인생의 레버를 당기는 법
              </Text>
              <Heading as={motion.h1} color={"yellow.400"} fontSize={"6xl"}>
                LUCKY
                <br />
                ROULETTE
              </Heading>
              <Text
                as={motion.h2}
                fontFamily={"Noto Sans KR"}
                fontSize={"xl"}
                opacity={0.3}
                color={"white"}
              >
                당신의 인생을 Draw할 Andrew 영상을 뽑아보세요(?)
              </Text>
            </Box>
          )}
        </AnimatePresence>
      </Box>
      <Center w={"full"} bottom={0}>
        <Box h={"40vh"} position={"relative"}>
          <Img
            h={"full"}
            objectFit={"contain"}
            src={
              process.env.PUBLIC_URL + "/assets/images/lucky-draw/roulette.png"
            }
            alt="Roulette"
            draggable={false}
          />
          {/* Box 안에 이미지를 넣어서, 이미지 대신 박스를 Rotate하면 만사 해결. 레버만 따로 움직이는 현상 방지 됨. */}
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
              onMouseEnter={enterLever}
              onMouseLeave={leaveLever}
              onClick={clickLever}
              draggable={false}
            />
          </Box>
        </Box>
      </Center>
      <Text
        right={0}
        bottom={0}
        m={2}
        fontSize={7}
        opacity={0.5}
        color={"white"}
        position={"absolute"}
      >
        본 페이지는 드로우앤드류님의 의사에 따라 언제든지 삭제될 수 있음을
        알립니다.
      </Text>
    </Box>
  );
};

export default Main;
