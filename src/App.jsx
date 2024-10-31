// import React from 'react'

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'
// import Services from './components/services/Services';
// import Qualification from './components/qualification/Qualification';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';

import Cursor from './components/cursor/Cursor';
import './App.css'
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Cursor />
    <Header/>            

    <main className='main '>
      <Home/>
      <About />
      <Skills />
      {/* <Services /> */}
      {/* <Qualification /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </main>
    </>
  )
}
export default App
