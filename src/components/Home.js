import axios from 'axios';
import Header from "./Header";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import React, { useEffect, useState } from 'react'

const Home = () => {

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

export default Home