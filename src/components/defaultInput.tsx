import { Input } from "@chakra-ui/react";
import React from "react";

const DefaultInput = (props: any) => {
  return (
    <Input
      placeholder={props.placeholder}
      borderWidth="2px"
      borderColor="#E6E6E620"
      size="sm"
      bg="#E6E6E620"
      borderRadius="0.15rem"
    />
  );
};

export default DefaultInput;
