import React from 'react'
import {A, usePath} from 'hookrouter'
import c from 'classnames'
import {Input} from 'antd'
import styles from './Navigation.module.css'

export const Navigation: React.FC = () => {
  const path = usePath()

  return (
    <nav className={styles.nav}>
      <A href={'/search'}>
        <Input.Search />
      </A>
      <A href={'/library'}>
        <span className={c(path === '/catalog' && styles.active)}>Catalog</span>
      </A>
      <A href={'/news'}>
        <span className={c(path === '/news' && styles.active)}>News</span>
      </A>
      <A href={'/login'}>
        <span className={c(path === '/login' && styles.active)}>Log in</span>
      </A>
    </nav>
  )
}
