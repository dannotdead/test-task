import React from 'react'

import Button from '../../shared/components/Button/Button'

import Logo from '../../assets/logo.svg'
import TelegramIcon from '../../assets/telegram.svg'
import ViberIcon from '../../assets/viber.svg'
import WhatsAppIcon from '../../assets/whatsapp.svg'

import './styles.scss'

const Header = () => {
  return (
    <header>
      <div className='branding'>
        <div className='logo-container'>
          <img src={Logo} alt='Main Logo' />
        </div>

        <p>крупный интегратор CRM в России и ещё 8 странах</p>
      </div>

      <nav>
        <Button text='Услуги' variant='secondary' />
        <Button text='Виджеты' variant='secondary' />
        <Button text='Интеграции' variant='secondary' />
        <Button text='Кейсы' variant='secondary' />
        <Button text='Сертификаты' variant='secondary' />
      </nav>

      <div className='contacts'>
        <p>+7 555 555 55-55</p>

        <div className='contacts__buttons'>
          <Button icon={TelegramIcon} />
          <Button icon={ViberIcon} />
          <Button icon={WhatsAppIcon} />
        </div>
      </div>
    </header>
  )
}

export default Header
