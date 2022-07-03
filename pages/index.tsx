import type { NextPage } from "next";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Layout from "components/Layout";
import GoogleLoginButton from "components/GoogleLoginButton";

const Home: NextPage = () => {
  return (
    <Layout title="test">
      <Box maxWidth="md" mx="auto">
        <img src="/main_logo.svg" alt="main_logo" />
        <Flex justify="center">
          <Heading>#BLA BLA</Heading>
        </Flex>
      </Box>
      <Center mt="20">
        <GoogleLoginButton />
      </Center>
    </Layout>
  );
};

export default Home;
