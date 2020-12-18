import './header.styles.scss'
import {Link} from 'react-router-dom'
import React from 'react'
import {ReactComponent as Logo} from '../../components/assets/crown.svg'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'/>
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
      </div>

    </div>
  )
}
