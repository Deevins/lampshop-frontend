import React from 'react'
import {FaLightbulb} from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'
import QuickActions from "../QuickActions/QuickActions.tsx";

const Header: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.left}>
            <FaLightbulb size={32}/>
            <span className={styles.logoText}>LampShop</span>
        </div>
        <SearchBar/>
        <div className={styles.icons}>
            <QuickActions/>
        </div>
    </header>
)

export default Header