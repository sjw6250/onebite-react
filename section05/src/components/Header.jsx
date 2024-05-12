import "./Main.css";
import Button from "./Button";

const Header = () => {
  const number = 10;
  const user = {
    name: "John Doe",
    loginStatus: true,
  };

  if (user.loginStatus) {
    return (
      <header className="loginstatus">
        <h1>Header</h1>
        <p>login</p>
        <p>{number}</p>

        <Button {...user}>Click me</Button>
      </header>
    );
  } else {
    return (
      <header style={{ backgroundColor: "red" }}>
        <h1>Header</h1>
        <p>guest</p>
        <p>{number}</p>
      </header>
    );
  }

  // return (
  //     <header>
  //         <h1>Header</h1>
  //         {user.loginStatus ? <p>login</p> : <p>guest</p>}
  //         <p>{number}</p>
  //     </header>
  // )
};

export default Header;
