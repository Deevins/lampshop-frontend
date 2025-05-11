import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/Catalog/ProductCard'
import { products } from '../mocks/products'
import styles from './FavoritesPage.module.scss'

const FavoritesPage: React.FC = () => {
    const favorites = products.filter(p => p.liked)

    return (
        <div className={styles.favorites}>
            <h2>Избранное</h2>

            {favorites.length === 0 ? (
                <p>У вас пока нет избранных товаров.</p>
            ) : (
                <div className={styles.grid}>
                    {favorites.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            )}

            <Link to="/">← Вернуться на главную</Link>
        </div>
    )
}

export default FavoritesPage