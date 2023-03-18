import React from 'react'
import clsx from 'clsx'

import './styles.scss'

const GradientText = ({ text, className }) => {
  return <span className={clsx('gradient-text', className)}>{text}</span>
}

export default GradientText
