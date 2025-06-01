import React, {useEffect, useState} from 'react';
import styles from './NavMenu.module.scss';
import {Category} from "../../types/category.ts";
import {getCategories} from "../../api/productApi.ts";

const NavMenu: React.FC = () => {
    const [categories, SetCategories] = useState<Category[]>([]);
    const [open, setOpen] = useState(false);


    const load = () => {
        getCategories().then(SetCategories);
    };

    useEffect(() => {
        load();
    }, []);

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
                    {categories.map((c) => (
                        <li key={c.ID} title={c.Name}>{c.Name}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default NavMenu;