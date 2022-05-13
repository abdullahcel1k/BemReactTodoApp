import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
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
    <section className="container">
      <Header setShow={setShow} />
      <TodoList todoList={todoList} getTodos={getTodos} />
      {isShow ? (
        <TodoModal
          setShow={setShow}
          getTodos={getTodos}
        />
      ) : null}
    </section>
  )
}

export default App;
