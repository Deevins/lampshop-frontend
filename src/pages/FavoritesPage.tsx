import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import ProductCard from '../components/Catalog/ProductCard'
import { products } from '../mocks/products'
import styles from './FavoritesPage.module.scss'

const FavoritesPage: React.FC = () => {
    const favorites = products.filter(p => p.liked)
    const navigate = useNavigate()

    if (favorites.length === 0) {
        return (
            <div className={styles.empty}>
                <AiOutlineHeart className={styles.icon} />
                <h2>Нет избранных товаров</h2>
                <p>Чтобы добавить товар в избранное, нажмите на сердечко рядом с ним</p>
                <button onClick={() => navigate('/')}>Перейти в каталог</button>
            </div>
        )
    }

    return (
        <div className={styles.favorites}>
            <h2>Избранное</h2>
            <div className={styles.grid}>
                {favorites.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
}

export default FavoritesPage
