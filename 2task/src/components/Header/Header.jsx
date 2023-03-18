import React from 'react'

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
        <button>Услуги</button>
        <button>Виджеты</button>
        <button>Интеграции</button>
        <button>Кейсы</button>
        <button>Сертификаты</button>
      </nav>
      <div className='contacts'>
        <p>+7 555 555 55-55</p>

        <div className='contacts__buttons'>
          <button>
            <img src={TelegramIcon} alt='Telegram' />
          </button>
          <button>
            <img src={ViberIcon} alt='Viber' />
          </button>
          <button>
            <img src={WhatsAppIcon} alt='WhatsApp' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
