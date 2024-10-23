import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import DownloadContainer from './components/DownloadContainer/DownloadContainer'
import Menu from './components/Menu/Menu'
import Meal from './components/Meal/Meal'
import Gallary from './components/Gallary/Gallary'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Nav />
      <Hero />
      <DownloadContainer />
      <Menu />
      <Meal />
      <Gallary/>
      <Footer />
    </>
  )
}

export default App
