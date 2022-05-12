import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';

function App() {
  const [isShow, setShow] = useState(false);
  const [todoList, setTodoList] = useState([
    {id: 72641, title: "asdf", desc: "asdf", isComplete: false}
  ]);

  useEffect(()=> {}, [todoList]);
  
  return (
    <section className="container">
      <Header setShow={setShow} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {isShow ? <TodoModal setShow={setShow} /> : null}
    </section>
  );
}

export default App;
