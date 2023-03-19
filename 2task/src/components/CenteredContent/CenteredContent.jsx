import React from 'react'

import { useMatchMedia } from '../../hooks/useMathMedia'
import Button from '../../shared/components/Button/Button'
import GradientText from '../../shared/components/GradientText/GradientText'

import './styles.scss'

const CenteredContent = () => {
  const { isMobile } = useMatchMedia()

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
            <p>{isMobile ? 'Skype аудит' : 'Виджеты'}</p>

            <span>
              30 готовых <br /> решений
            </span>
          </div>

          <div>
            <p>{isMobile ? '30 виджетов' : 'Dashboard'}</p>

            <span>
              с показателями <br /> вашего бизнеса
            </span>
          </div>

          <div>
            <p>{isMobile ? 'Dashboard' : 'Skype Аудит'}</p>

            <span>
              отдела продаж <br /> и  CRM системы
            </span>
          </div>

          <div>
            <p>{isMobile ? 'Месяц аmoCRM' : '35 дней'}</p>

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
