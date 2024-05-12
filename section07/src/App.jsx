import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";

const mockData = [
  {
    id: 1,
    text: "React 공부하기",
    done: true,
    date: "2021-09-29",
  },
  {
    id: 2,
    text: "React Hooks 공부하기",
    done: false,
    date: "2021-09-29",
  },
  {
    id: 3,
    text: "TypeScript 공부하기",
    done: false,
    date: "2021-09-29",
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const onChangeTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // when checkbox is clicked
  const onCheckChangeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  const onRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="App">
        <Header></Header>
        <Editor onChangeTodo={onChangeTodo}></Editor>
        <List
          todos={todos}
          onCheckChangeTodo={onCheckChangeTodo}
          onRemoveTodo={onRemoveTodo}
        ></List>
      </div>
    </>
  );
}

export default App;
