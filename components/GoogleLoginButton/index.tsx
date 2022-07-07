import { FC, memo } from "react";
import { Button } from "@chakra-ui/react";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";

const GoogleLoginButton: FC = () => {
  const { signInWithGoogle } = useFirebaseAuth();
  return (
    <Button
      leftIcon={
        <img
          src="google_logo.svg"
          alt="google_logo"
          style={{
            backgroundColor: "#ffffff",
            padding: "6px",
            borderRadius: "50%",
          }}
        />
      }
      colorScheme="blue"
      onClick={signInWithGoogle}
    >
      Google로 로그인하기
    </Button>
  );
};

export default memo(GoogleLoginButton);
