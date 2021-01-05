import './custom-button.styles.scss'
import React from 'react'

export default function CustomButton({children, ...otherProps}) {
  return (
    <button className='custom-button'
            {...otherProps}
    >
        {children}
    </button>
  )
}
