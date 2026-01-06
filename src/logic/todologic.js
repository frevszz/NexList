import { getFromStorage, saveToStorage } from "./storage";

const TODO_KEY = "todos";

export const getTodos = () => {
  return getFromStorage(TODO_KEY) || [];
};

export const addTodo = ({ title, categoryId, start, end }) => {
  const todos = getTodos();

  const newTodo = {
    id: Date.now(),
    title,
    categoryId,
    start,
    end,
    isDone: false,
  };

  const updated = [...todos, newTodo];
  saveToStorage(TODO_KEY, updated);

  return updated;
};

export const deleteTodo = (todoId) => {
  const todos = getTodos();
  const updated = todos.filter((todo) => todo.id !== todoId);
  saveToStorage(TODO_KEY, updated);
  return updated;
};

export const deleteAllTodos = () => {
  saveToStorage(TODO_KEY, []);
  return [];
};

export const toggleTodo = (todoId) => {
  const todos = getTodos();
  const updated = todos.map((todo) =>
    todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
  );
  saveToStorage(TODO_KEY, updated);
  return updated;
};

export const deleteTodosByCategory = (categoryId) => {
  const todos = getTodos();
  const updated = todos.filter((todo) => todo.categoryId !== categoryId);
  saveToStorage(TODO_KEY, updated);
  return updated;
};
