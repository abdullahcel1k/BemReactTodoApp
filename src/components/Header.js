import React from 'react'

const Header = () => {
 return (
  <section className="header">
   <img
    className="insert-btn btn"
    src="/img/insert-icon.svg"
    onclick="toggleModal()"
   />
  </section>
 )
}

export default Header