import React, { useState } from 'react';
import styles from './NavMenu.module.scss';
import { categories } from '../../mocks/products';

const NavMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className={styles.nav}>
            <div className={styles.header} onClick={() => setOpen(!open)}>
                <span className={styles.title}>Категории</span>
                <button className={styles.toggle} aria-expanded={open}>
                    {open ? '−' : '+'}
                </button>
            </div>
            <div className={`${styles.container} ${open ? styles.open : ''}`}>
                <ul>
                    {categories.map((c, i) => (
                        <li key={i} title={c}>{c}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default NavMenu;