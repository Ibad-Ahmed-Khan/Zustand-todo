// Counter.jsx
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { BiPlus, BiMinus } from "react-icons/bi"; // Importing Plus and Minus icons
import useZustand from "../Zustand";

function Counter() {
  const { count, increment, decrement } = useZustand();

  return (
    <VStack minH="100vh" textAlign="center" gap="5rem">
      <Text fontSize="4xl" fontWeight="bolder">
        Counter App with Zustand
      </Text>
      <Flex align="center" justify="center" gap="2rem">
        <Button onClick={increment} bg="green.500" _hover={{ bg: "green.600" }}>
          <BiPlus />
        </Button>
        <Text fontSize="2xl">{count}</Text>
        <Button
          onClick={decrement}
          bg="orange.500"
          _hover={{ bg: "orange.600" }}
        >
          <BiMinus />
        </Button>
      </Flex>
    </VStack>
  );
}

export default Counter;
