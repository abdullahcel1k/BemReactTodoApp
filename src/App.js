import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';

function App() {
  const [isShow, setShow] = useState(false);

  return (
    <section className="container">
      <Header setShow={setShow} />
      <TodoList />
      {isShow ? <TodoModal setShow={setShow} /> : null}
    </section>
  );
}

export default App;
