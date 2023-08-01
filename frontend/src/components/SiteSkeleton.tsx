import { Box, HStack, Skeleton } from "@chakra-ui/react";

export default function SiteSkeleton() {
  return (
    <Box w="100%">
      <Skeleton style={{ aspectRatio: 16 / 9 }} rounded="2.5em" mb={7} />
      <HStack justifyContent={"space-between"}>
        <Skeleton rounded="md" width="60%" height={5} mb={1} />
        <Skeleton rounded="md" width="15%" height={5} />
      </HStack>
    </Box>
  );
}
