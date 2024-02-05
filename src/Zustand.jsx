import create from "zustand";

const useZustand = create((set) => ({
  // COUNTER APP
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),

  // TODO LIST APP
  todo: "",
  todos: [],
  setTodo: (newTodo) => set({ todo: newTodo }),
  addTodo: () =>
    set((state) => {
      const trimmedTodo = state.todo.trim();
      if (trimmedTodo !== "") {
        const newTodo = {
          id: Date.now(), // Unique ID for each todo item
          text: trimmedTodo,
          completed: false,
        };
        return {
          todos: [...state.todos, newTodo],
          todo: "",
        };
      }
      return state;
    }),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useZustand;
