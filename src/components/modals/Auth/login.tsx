import { authModalState } from "@/Atoms/authmodal";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type loginProps = {};

const login: React.FC<loginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginform, setloginform] = useState({
    email: "",
    password: "",
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setloginform((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        mb={2}
        type="email"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        mb={2}
        type="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Button type="submit" width="100%" height="36px" my={2}>
        Log in
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr="1">New here ?</Text>
        <Text
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }));
          }}
        >
          Sign up
        </Text>
      </Flex>
    </form>
  );
};
export default login;
