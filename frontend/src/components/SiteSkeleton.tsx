import { Box, HStack, Skeleton } from "@chakra-ui/react";

export default function SiteSkeleton() {
  return (
    <Box>
      <Skeleton rounded="2.5em" height={"280px"} mb={7} />
      <HStack justifyContent={"space-between"}>
        <Skeleton rounded="md" width="60%" height={5} mb={1} />
        <Skeleton rounded="md" width="15%" height={5} />
      </HStack>
    </Box>
  );
}
