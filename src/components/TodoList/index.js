import axios from 'axios';
import React from 'react'

const TodoList = ({ todoList, getTodos }) => {

  const removeTask = (todoId) => {
    axios.delete("https://localhost:44369/api/Todo?id=" + todoId)
      .then(res => {
        window.alert(`Tebrikler "${res.data.title}" taskınız silindi`);
      }).finally(() => {
        getTodos();
      });
  }
  const completeTask = (todoId) => {
    axios.patch("https://localhost:44369/api/Todo?id=" + todoId)
      .then(res => {
        window.alert(`Tebrikler "${res.data.title}" taskınız güncellendi.`);
      }).finally(() => {
        getTodos();
      });
  }

  return (
    <section id="todoItems" className="todos__container">
      {todoList.map((todoItem, index) => {
        return <div key={index} className={"todo__item " + (todoItem.isComplete ? "completed" : "")} data-id={todoItem.id}>
          <div className="todo__checkbox btn" data-id={todoItem.id
          } onClick={(e) => { completeTask(todoItem.id) }}>
            <img src="/img/checked.svg" />
          </div>
          <div className="todo__info">
            <div className="todo__title">{todoItem.title}</div>
            <span className="todo__desc"
            >{todoItem.desc}</span>
          </div>
          <img className="btn" src="/img/delete.png"
            onClick={() => { removeTask(todoItem.id) }} />
        </div>
      })}
    </section>
  )
}

export default TodoList