import React from 'react'
import clsx from 'clsx'

import './styles.scss'

const Button = ({ icon, text, variant, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, {
        'secondary-button': variant === 'secondary',
        'icon-button': icon,
      })}
    >
      {icon && <img src={icon} alt='button-icon' />}
      {text}
    </button>
  )
}

export default Button
