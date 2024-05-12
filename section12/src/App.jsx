import "./App.css";
import "./index.css";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { getEmotion } from "./util/get-emotion.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

function App() {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/new");
  };

  return (
    <>
      <Header
        title="Diary"
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
      <div>
        <Button text={"asdf"} onClick={() => {}} type={"Default"}></Button>
        <Button text={"d"} onClick={() => {}} type={"Positive"}></Button>
        <Button text={"g"} onClick={() => {}} type={"Negative"}></Button>
        <nav>
          <img src={getEmotion(1)} alt="Emotion" />
          <img src={getEmotion(2)} alt="Emotion" />
          <img src={getEmotion(3)} alt="Emotion" />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/diary">Diary</Link>
            </li>
            <li>
              <Link to="/new">New</Link>
            </li>
          </ul>
        </nav>
        <button onClick={onClickButton}>New</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
