import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';

function App() {
  const [isShow, setShow] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    var result;
    try {
      result = await fetch('https://localhost:44369/api/Todo', {
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          return res.json();
        });
    } catch (ex) {
      console.log(ex);
    } finally {
      console.log(result);
    }

  };

  getTodos();
  useEffect(() => {
  }, [todoList]);

  return (
    todoList.length > 0 ? <section className="container">
      <Header setShow={setShow} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {isShow ? <TodoModal setShow={setShow}
        setTodoList={setTodoList} todoList={todoList} /> : null}
    </section> : null
  );
}

export default App;
