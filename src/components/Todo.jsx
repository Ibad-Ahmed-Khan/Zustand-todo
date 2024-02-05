// Todo.jsx
import {
  Button,
  Text,
  Flex,
  Input,
  VStack,
  OrderedList,
  ListItem,
  useColorMode,
  useToast, // Importing useToast hook
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";
import useZustand from "../Zustand";

const Todo = () => {
  const { todo, todos, setTodo, addTodo, deleteTodo } = useZustand();
  const { colorMode } = useColorMode();
  const toast = useToast(); // Initializing useToast

  const showToast = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 3000, // Toast duration in milliseconds
      isClosable: true,
    });
  };

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      addTodo();
      showToast("Task added!", "success");
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
    showToast("Task deleted!", "error");
  };

  return (
    <VStack minH="100vh" gap="5rem">
      <Text fontSize="4xl" fontWeight="bolder">
        Todo App with Zustand
      </Text>

      <Flex>
        <Input
          placeholder="Your Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          bgColor={colorMode === "light" ? "white" : "gray.700"}
          color={colorMode === "light" ? "black" : "white"}
        />
        <Button onClick={handleAddTodo} ml="2" bgColor="blue.500">
          Add Todo
        </Button>
      </Flex>

      {todos.length > 0 && (
        <OrderedList w="full" mt="4">
          {todos.map((todoItem) => (
            <ListItem
              mt="2"
              key={todoItem.id}
              p="2"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgColor={colorMode === "light" ? "white" : "gray.700"}
              color={colorMode === "light" ? "black" : "white"}
              border={colorMode === "light" ? "1px solid black" : "white"}
            >
              {todoItem.text}
              <Button
                onClick={() => handleDeleteTodo(todoItem.id)}
                bgColor="red.500"
                _hover={{ bgColor: "red.600" }}
              >
                <FaTrash />
              </Button>
            </ListItem>
          ))}
        </OrderedList>
      )}
    </VStack>
  );
};

export default Todo;
