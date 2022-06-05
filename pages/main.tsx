import type { NextPage } from "next";
import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from '@chakra-ui/react'
import TransEditor from "../components/TransEditor";

const Main: NextPage = () => {
  return (
    <TransEditor/>
  );
};

export default Main;
