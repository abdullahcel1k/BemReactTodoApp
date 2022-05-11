import React from 'react'

const TodoModal = () => {
 return (
  <div id="todoFormModal" className="modal">
   <div className="modal-body">
    <form id="todoForm" className="todo__form">
     <input name="title" placeholder="Başlık" />
     <textarea name="desc" placeholder="Açıklama" activ></textarea>
     <button type="button" className="save-btn btn" onclick="addTodo()">
      <img src="/img/checked.svg" /> CREATE
     </button>
    </form>
   </div>
  </div>
 )
}

export default TodoModal