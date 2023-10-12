import React from 'react'
import HeaderLandingPage from '../components/Header/HeaderLandingPage'
import BarraSearch from '../components/BarraSearch/BarraSearch'
import List from '../components/List/List.jsx'
const LandingPage = () => {
  return (
    <div>
        <HeaderLandingPage/>
        <BarraSearch/>
        <List/>
    </div>
  )
}

export default LandingPage