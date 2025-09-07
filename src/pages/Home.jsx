import React from 'react'
import Banner from '../components/Banner'
import Download from '../components/Download'
import Organized from '../components/Organized'
import Switch from '../components/Switch'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Migrate from '../components/Migrate'
import Ready from '../components/Ready'

const Home = () => {
  return (
    <>
      <Banner/>
      <Organized/>
      <Switch/>
      <Reviews/>
      <Download/>
      <Pricing/>
      <Migrate/>
      <Ready/>
      {/* ----Old---- */}
    </>
  )
}

export default Home