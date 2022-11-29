import React from 'react'

export default function Home() {
  return (
    <div className='home-container'>
      <nav className='container-navbar'>
        {/* <div className='container-navbar-left'></div> */}
        <a href="/">Baroland</a>
        <div className='container-navbar-rigth'>
        <p>alexlegeek10@gmail.com</p>
        <p>Se déconnecter</p>
        </div>
        </nav>
      <main>
        <div className="main-navbar">
            <h1>Des questions</h1>
            <p>Ce forum est ouvert à toutes les questions liées a la programmation</p>
            <p>(PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)</p>
            <br />
            <input type="text" name="" id="" value='Rechercher des questions' />
        </div>
      </main>
    </div>
  )
}
