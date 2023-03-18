import React from 'react'

import Header from '../../components/Header/Header'
import CenteredContent from '../../components/CenteredContent/CenteredContent'

import './styles.scss'

const Main = () => {
  return (
    <div className='main'>
      <Header />

      <CenteredContent />

      <footer></footer>
    </div>
  )
}

export default Main
