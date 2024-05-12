import { useState, useRef } from "react";

const Editor = ({ onChangeTodo }) => {
  const inputRef = useRef(4);
  const onClickTodo = () => {
    onChangeTodo({
      id: inputRef.current++,
      text: todoContent,
      done: false,
      date: "2024-09-29",
    });
    setTodoContent("");
  };

  const [todoContent, setTodoContent] = useState("");
  const onChangeTodoHandler = (e) => {
    setTodoContent(e.target.value);
  };

  return (
    <div className="Editor">
      <input
        value={todoContent}
        onChange={onChangeTodoHandler}
        placeholder="New Todo"
      />
      <button onClick={onClickTodo}>Add</button>
    </div>
  );
};
export default Editor;
