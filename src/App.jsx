import React from 'react'
import Header from './Components/header/header'
import Navbar from './Components/navbar/navbar'
import About from './Components/about/About'
import Project from './Components/Project/Project'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/footer'
import Experience from './Components/experience/experience'

export default function App (){
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
    </>
  )
}
