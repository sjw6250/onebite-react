import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onCheckChangeTodo, onRemoveTodo }) => {
  const [search, setSearch] = useState("");

  const filteredTodos = () => {
    return todos.filter((todo) => todo.text.includes(search));
  };
  const filteredData = filteredTodos();

  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="List">
        <h2>Todo List 🌱</h2>
        <input onChange={onSearch} placeholder="검색어를 입력하세요 " />
      </div>
      <div className="TodoWrapper">
        {filteredData.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onCheckChangeTodo={onCheckChangeTodo}
            onRemoveTodo={onRemoveTodo}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
};
export default List;
