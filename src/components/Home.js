import React from 'react'

const Home = () => {
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