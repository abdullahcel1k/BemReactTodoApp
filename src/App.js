import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";

function App() {
  const [isShow, setShow] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    axios
      .get("https://localhost:5001/api/Todo")
      .then((res) => setTodoList(res.data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return todoList.length > 0 ? (
    <section className="container">
      <Header setShow={setShow} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {isShow ? (
        <TodoModal
          setShow={setShow}
          getTodos={getTodos}
        />
      ) : null}
    </section>
  ) : null;
}

export default App;
