import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import * as yup from 'yup';

let todoFormValidationSchema = yup.object().shape({
 title: yup.string().required("Gardaş eksiksiz gir"),
 desc: yup.string()
});

const TodoModal = ({ setShow, getTodos }) => {
 const adddTodoItemToList = (newTodoItem) => {
  // setTodoList([...todoList, newTodoItem]);
  axios.post("https://localhost:44369/api/Todo", newTodoItem)
      .then((res) => console.log(res)).finally(() => {getTodos()});
 }

 useEffect(() => {
  const formModalEl = document.querySelector("#todoFormModal");

  formModalEl.addEventListener("click", (e) => {
   if (e.target.id == "todoFormModal") setShow(false);
  });

  // komponentimizin yok olduğunda yapılması
  // gereken işlemler return kod blokları içinde yapılır
  return () => {
   // kapanma anında şunu
  };

 });
 return (
  <div id="todoFormModal" className="modal">
   <div className="modal-body">
    <Formik
     initialValues={{ title: '', desc: '' }}
     validationSchema={todoFormValidationSchema}
     onSubmit={(values, { setSubmitting, resetForm }) => {
      const newTodoItem = 
      { isComplete: false, ...values };
      adddTodoItemToList(newTodoItem);
      setShow(false);
      document.getElementById("todoForm").reset();
     }}
    >{({ isSubmitting, handleSubmit,
     errors, touched, handleChange }) => (
     <Form id="todoForm" className="todo__form">
      <input name="title" placeholder="Başlık"
       onChange={handleChange} />
      {errors.title && touched.title ? <small className='valid-error'>{errors.title}</small> : null}
      <textarea name='desc' placeholder="Açıklama"
       onChange={handleChange}></textarea>
      {errors.desc && touched.desc ? <small className='valid-error'>{errors.desc}</small> : null}
      <button type="submit" className="save-btn btn"
       disabled={isSubmitting}>
       <img src="/img/checked.svg" /> CREATE
      </button>
     </Form>
    )}
    </Formik>
   </div>
  </div>
 )
}

export default TodoModal