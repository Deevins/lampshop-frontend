import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './ItemPage.module.scss'
import { fetchProductById } from '../api/productApi.ts'
import { ProductFull } from '../types/product.ts'

const ItemPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<ProductFull | null>(null)

    useEffect(() => {
        if (id) {
            fetchProductById(id)
                .then(setProduct)
                .catch(() => {
                    console.error(`Error fetching product: ${id}`)
                })
        }
    }, [id])

    if (!product) return <div className={styles.page}>Загрузка...</div>

    const available = product.is_active && product.stock_qty > 0

    return (
        <div className={styles.page}>
            <nav className={styles.breadcrumbs}>
                <Link to="/">Каталог товаров</Link> / <span>{product.name}</span>
            </nav>

            <div className={styles.content}>
                <div className={styles.imageSection}>
                    <img
                        src="https://santhimetaleshop.in/cdn/shop/files/Untitleddesign_26a5d7f4-82b7-4e7a-ac43-068a31086beb.png?v=1694498000&width=1445"
                        alt={product.name}
                        className={styles.mainImage}
                    />
                </div>

                <div className={styles.detailsSection}>
                    <h1 className={styles.title}>{product.name}</h1>
                    <div className={styles.price}>{product.price} ₽</div>
                    <div className={`${styles.status} ${!available ? styles.statusUnavailable : ''}`}>
                        {available ? 'В наличии' : 'Нет в наличии'}
                    </div>
                    <div className={styles.stock} style={{color:"black"}}>
                        Остаток на складе: <span>{available ? product.stock_qty : 0} шт.</span>
                    </div>
                    <button disabled={!available} className={styles.addBtn}>Добавить в корзину</button>
                    <p className={styles.description}>
                        {product.description || 'Описание товара отсутствует'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemPage
