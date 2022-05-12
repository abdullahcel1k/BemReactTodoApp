import React from 'react'

const TodoList = ({ todoList, setTodoList }) => {

  const removeTask = (todoId) => {
    const filteredItems = todoList
      .filter(x => x.id != todoId);
    setTodoList(filteredItems);
  }
  const completeTask = (e) => {
    const findedTodoIndex = todoList
      .findIndex(x => x.id == e.currentTarget.dataset.id)
    if (findedTodoIndex != -1) {
      e.currentTarget.parentNode.classList.toggle("completed")
      todoList[findedTodoIndex].isComplete = true;
      setTodoList(todoList);
    }
  }

  return (
    <section id="todoItems" className="todos__container">
      {todoList.map((todoItem, index) => {
        return <div key={index} className={"todo__item " + (todoItem.isComplete ? "completed" : "")} data-id={todoItem.id}>
          <div className="todo__checkbox btn" data-id={todoItem.id
          } onClick={(e) => { completeTask(e) }}>
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