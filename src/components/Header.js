import React from 'react'

const Header = ({ setShow }) => {
 return (
  <section className="header">
   <img
    className="insert-btn btn"
    src="/img/insert-icon.svg"
    onClick={() => {setShow(true)}}
   />
  </section>
 )
}

export default Header