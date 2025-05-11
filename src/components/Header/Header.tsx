import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import SearchBar from '../SearchBar/SearchBar';
import QuickActions from '../QuickActions/QuickActions';
import styles from './Header.module.scss';

const Header: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.inner}>
            <div className={styles.logo}>
                <FaLightbulb />
                <span>LampShop</span>
            </div>
            <div className={styles.search}><SearchBar /></div>
            <div className={styles.actions}><QuickActions /></div>
        </div>
    </header>
);
export default Header;