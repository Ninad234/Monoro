import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <LatestCollection/>
    <Footer/>
    </>
  )
}

export default Home