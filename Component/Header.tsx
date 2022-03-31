import React from 'react'
import headerStyles from '../styles/headerStyles.module.css'
const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span>
        </h1>
        <p className={headerStyles.description}>
            keep up to date with the latest web dev news
        </p>
    </div>
  )
}

export default Header