import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineClockCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'

const Header: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.left}>
            <FaLightbulb size={32} />
            <span className={styles.logoText}>LampShop</span>
        </div>
        <SearchBar />
        <div className={styles.icons}>
            <AiOutlineHeart size={24} />
            <AiOutlineClockCircle size={24} />
            <AiOutlineShoppingCart size={24} />
        </div>
    </header>
)

export default Header