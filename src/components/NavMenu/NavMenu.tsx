import React from 'react'
import styles from './NavMenu.module.scss'
import { categories } from '../../mocks/products'


const NavMenu: React.FC = () => (
    <nav className={styles.nav}>
        <div className="container">
            <ul>
                {categories.map((cat, i) => (
                    <li key={i} title={cat}>
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    </nav>
)

export default NavMenu