import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Achivement from './components/Achivement'
import Slideshow from './components/Slideshow'
import Postion from './components/Position'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Achivement/>
      <Postion/>
      <Project/>
      <Expertise/>
      <Footer/>
    </>
  )
}

export default App
