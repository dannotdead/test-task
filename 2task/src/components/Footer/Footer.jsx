import React from 'react'

import Button from '../../shared/components/Button/Button'

import TelegramIcon from '../../assets/telegram.svg'
import ViberIcon from '../../assets/viber.svg'
import WhatsAppIcon from '../../assets/whatsapp.svg'

import './styles.scss'

const Footer = () => {
  return (
    <footer>
      <section>
        <article>О компании</article>

        <div className='menu__about'>
          <Button text='Партнёрская программа' variant='secondary' />
          <Button text='Вакансии' variant='secondary' />
        </div>
      </section>

      <section>
        <article>Меню</article>

        <div className='menu__main'>
          <Button text='Расчёт стоимости' variant='secondary' />
          <Button text='Услуги' variant='secondary' />
          <Button text='Виджеты' variant='secondary' />
          <Button text='Интеграции' variant='secondary' />
          <Button text='Наши клиенты' variant='secondary' />

          <Button text='Кейсы' variant='secondary' />
          <Button text='Благодарственные письма' variant='secondary' />
          <Button text='Сертификаты' variant='secondary' />
          <Button text='Блог на Youtube' variant='secondary' />
          <Button text='Вопрос / Ответ' variant='secondary' />
        </div>
      </section>

      <section>
        <article>Контакты</article>

        <p>+7 555 555-55-55</p>

        <div className='contacts-group'>
          <Button icon={TelegramIcon} />
          <Button icon={ViberIcon} />
          <Button icon={WhatsAppIcon} />
        </div>

        <p>Москва, Путевой проезд 3с1, к 902</p>

        <div className='footer-rights'>
          <span>©WELBEX 2022. Все права защищены.</span>

          <a href='/'>Политика конфиденциальности</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
