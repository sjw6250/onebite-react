import "./TodoItem.css";

const TodoItem = ({
  id,
  text,
  done,
  date,
  onCheckChangeTodo,
  onRemoveTodo,
}) => {
  const onCheckChange = () => {
    onCheckChangeTodo(id);
  };

  const onDeleteClicked = () => {
    onRemoveTodo(id);
  };

  return (
    <div className="TodoItem">
      <input checked={!done} onChange={onCheckChange} type="checkbox" />
      <div className="Content">{text}</div>
      <div className="Date">{date}</div>
      <button onClick={onDeleteClicked}>Delete</button>
    </div>
  );
};
export default TodoItem;
