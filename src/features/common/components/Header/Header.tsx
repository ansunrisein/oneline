import React from 'react'
import {Divider} from 'antd'
import {Navigation} from '../Navigation'
import styles from './Header.module.css'

export const Header: React.FC = () => (
  <header className={styles.header}>
    {/* LOGO */}
    <Navigation />
    <Divider style={{margin: 0}} />
  </header>
)
