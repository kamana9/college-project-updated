import { Button } from "@chakra-ui/react";
import React from "react";

const DefaultButton = (props: any) => {
  return (
    <Button px="2rem" bg="#A1FE6B" color="black">
      {props.children}
    </Button>
  );
};

export default DefaultButton;
