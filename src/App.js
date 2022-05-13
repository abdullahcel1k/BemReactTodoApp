import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";
import "./utils/interceptor";

function App() {
  const [isShow, setShow] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    axios
      .get("Todo")
      .then((res) => setTodoList(res.data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
