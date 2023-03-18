import React from 'react'

import Button from '../../shared/components/Button/Button'
import GradientText from '../../shared/components/GradientText/GradientText'

import './styles.scss'

const CenteredContent = () => {
  return (
    <main className='content'>
      <section>
        <article>
          Зарабатывайте <br /> больше
          <GradientText text='с WELBEX' className='content__styled-text' />
        </article>

        <p>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </section>

      <aside>
        <article>
          {'Вместе с '}
          <GradientText text='БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ' />
          {' мы дарим:'}
        </article>

        <div className='content__advantages'>
          <div>
            <p>Виджеты</p>

            <span>
              30 готовых <br /> решений
            </span>
          </div>

          <div>
            <p>Dashboard</p>

            <span>
              с показателями <br /> вашего бизнеса
            </span>
          </div>

          <div>
            <p>Skype Аудит</p>

            <span>
              отдела продаж <br /> и  CRM системы
            </span>
          </div>

          <div>
            <p>35 дней</p>

            <span>
              использования <br /> CRM
            </span>
          </div>
        </div>

        <Button text='Получить консультацию' className='content__consutation-button' />
      </aside>
    </main>
  )
}

export default CenteredContent
