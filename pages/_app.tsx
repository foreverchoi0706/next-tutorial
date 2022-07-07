import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AuthUserProvider  from "@/components/AuthUserProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
