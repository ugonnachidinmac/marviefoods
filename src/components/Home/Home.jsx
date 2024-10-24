import React from 'react'
import Hero from '../../components/Hero/Hero'
import DownloadContainer from '../../components/DownloadContainer/DownloadContainer'
import Menu from '../../components/Menu/Menu'
import Meal from '../../components/Meal/Meal'
import Gallary from '../../components/Gallary/Gallary'
import Questions from '../../components/Questions/Questions'

const Home = () => {
  return (
    <>
     <Hero />
      <DownloadContainer />
      <Menu />
      <Meal />
      <Gallary/>
      <Questions />
    </>
  )
}

export default Home