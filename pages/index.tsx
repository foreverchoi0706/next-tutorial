import type { NextPage } from "next";
import { Heading, Box, Flex, Center } from "@chakra-ui/react";
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
        <GoogleLoginButton onClick={() => alert(1)} />
      </Center>
    </Layout>
  );
};

export default Home;
