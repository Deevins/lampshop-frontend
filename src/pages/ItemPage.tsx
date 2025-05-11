import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../mocks/products'
import styles from './ItemPage.module.scss'

const ItemPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const product = products.find(p => p.id === id) ?? products[0]

    const images = [product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl]
    const [mainImg, setMainImg] = React.useState(images[0])

    return (
        <div className={styles.page}>
            <nav className={styles.breadcrumbs}>
                <Link to="/">Каталог товаров</Link> / <span>{product.name}</span>
            </nav>

            <div className={styles.content}>
                <div className={styles.imageSection}>
                    <img src={mainImg} alt={product.name} className={styles.mainImage} />
                    <div className={styles.thumbnails}>
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className={`${styles.thumb} ${src === mainImg ? styles.active : ''}`}
                                onClick={() => setMainImg(src)}
                            >
                                <img src={src} alt={`${product.name} ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.detailsSection}>
                    <h1 className={styles.title}>{product.name}</h1>
                    <div className={styles.price}>140 ₽</div>
                    <div className={styles.status}>{product.available ? 'В наличии' : 'Нет в наличии'}</div>
                    <div className={styles.stock}>Остаток на складе: <span>12 шт.</span></div>
                    <button className={styles.addBtn}>Добавить в корзину</button>
                    <p className={styles.description}>
                        Умная лампа Wi-Fi RGB E27 с управлением через приложение — это современное решение для вашего дома или офиса. Обеспечивает стабильное и экономичное освещение, подходит для ежедневного использования. Эта лампа отличается высокой энергоэффективностью и продолжительным сроком службы. Идеально подходит для замены старых источников света, обеспечивая при этом комфорт и уют в помещении.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemPage
