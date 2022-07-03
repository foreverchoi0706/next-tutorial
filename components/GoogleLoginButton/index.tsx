import { FC, memo, useCallback } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import FirebaseClient from "@/models/firebase_client";

const provider = new GoogleAuthProvider();

const GoogleLoginButton: FC = () => {
  const handleClick = useCallback(() => {
    signInWithPopup(FirebaseClient.getInstance().Auth, provider);
  }, []);

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
      onClick={handleClick}
    >
      Google로 로그인하기
    </Button>
  );
};

export default memo(GoogleLoginButton);
