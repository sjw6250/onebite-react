const newLocal = (e) => {
  console.log("event", e);
};
const Button = ({ name, children }) => {
  return (
    <>
      <button onMouseEnter={newLocal}>{children}</button>
      <button style={{ backgroundColor: "red" }}>{name}</button>
    </>
  );
};

export default Button;
