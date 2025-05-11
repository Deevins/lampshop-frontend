import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => (
    <div className={styles.searchBar}>
        <input type="text" placeholder="Поиск товара..." />
        <button>🔍</button>
    </div>
);

export default SearchBar;