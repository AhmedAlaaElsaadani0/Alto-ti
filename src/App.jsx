import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Footer from './Component/Footer/Footer'

export default function App() {
  return (<>
  <Navbar/>
  <Home/> 
  <About/>
  <Services/>
  <Contact/>
  <Footer/>
  
  </>
  )
}
