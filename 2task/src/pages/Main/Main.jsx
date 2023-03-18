import React from 'react'

import Header from '../../components/Header/Header'
import CenteredContent from '../../components/CenteredContent/CenteredContent'
import Footer from '../../components/Footer/Footer'

import './styles.scss'

const Main = () => {
  return (
    <div className='main'>
      <Header />

      <CenteredContent />

      <Footer />
    </div>
  )
}

export default Main
