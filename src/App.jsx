// App.jsx
import { Button, VStack, useColorMode } from "@chakra-ui/react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack spacing="100" justify="center">
      <VStack align="center" justify="center">
        bgColor={colorMode === "light" ? "white" : "black"}
        based on color mode color={colorMode === "light" ? "black" : "white"}
        Text color based on color mode
        <Button
          mt="4"
          onClick={toggleColorMode}
          bgColor={colorMode === "light" ? "gray.700" : "gray.300"}
          color={colorMode === "light" ? "white" : "black"}
          _hover={{ bgColor: colorMode === "light" ? "gray.600" : "gray.400" }}
        >
          Toggle Dark Mode
        </Button>
      </VStack>
      <VStack>
        <Counter />
        <Todo />
      </VStack>
    </VStack>
  );
}

export default App;
