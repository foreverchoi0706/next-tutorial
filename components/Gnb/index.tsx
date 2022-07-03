import { FC, memo } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

const Gnb: FC = () => {
  return (
    <Box>
      <Flex
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        maxW="md"
        mx="auto"
      >
        <Spacer />
        <Box flex="1">
          <img
            style={{
              height: "40px",
            }}
            src="logo.svg"
            alt="logo"
          />
        </Box>
        <Box justifyContent="flex-end">
          <Button>로그인</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default memo(Gnb);
