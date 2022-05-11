import { Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import * as yup from 'yup';

let todoFormValidationSchema = yup.object().shape({
 title: yup.string().required("Gardaş eksiksiz gir"),
 desc: yup.string()
});

const TodoModal = ({ setShow }) => {
 useEffect(() => {
  const formModalEl = document.querySelector("#todoFormModal");

  formModalEl.addEventListener("click", (e) => {
   if (e.target.id == "todoFormModal") setShow(false);

   // komponentimizin yok olduğunda yapılması
   // gereken işlemler return kod blokları içinde yapılır
   return {
    // kapanma anında şunu
   }
  });
 });
 return (
  <div id="todoFormModal" className="modal">
   <div className="modal-body">
    <Formik
     initialValues={{ title: '', desc: '' }}
     validationSchema={todoFormValidationSchema}
     onSubmit={(values, { setSubmitting }) => {
      console.log(values);
     }}
    >{({ isSubmitting, handleSubmit,
     errors, touched, handleChange }) => (
     <Form id="todoForm" className="todo__form">
      <input name="title" placeholder="Başlık"
       onChange={handleChange} />
      {errors.title && touched.title ? <small>{errors.title}</small> : null}
      <textarea name="desc" placeholder="Açıklama" 
       onChange={handleChange}></textarea>
      {errors.desc && touched.desc ? <small>{errors.desc}</small> : null}
      <button type="button" className="save-btn btn"
       disabled={isSubmitting} onClick={() => { handleSubmit() }}>
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