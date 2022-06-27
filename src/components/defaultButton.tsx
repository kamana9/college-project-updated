import { Button } from "@chakra-ui/react";
import React from "react";

const DefaultButton = (props: any) => {
  return (
    <Button
      px="2rem"
      onClick={props.onClick}
      bg="#A1FE6B"
      type={props.type || "button"}
      color="black"
    >
      {props.children}
    </Button>
  );
};

export default DefaultButton;
