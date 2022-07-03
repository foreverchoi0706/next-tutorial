import { FC, memo } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const GoogleLoginButton: FC<ButtonProps> = (props) => {
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
      {...props}
    >
      Google로 로그인하기
    </Button>
  );
};

export default memo(GoogleLoginButton);
