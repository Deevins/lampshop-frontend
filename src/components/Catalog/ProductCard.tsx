import React from 'react'
import {Link} from 'react-router-dom'
import styles from './ProductCard.module.scss'
import {ProductFull} from "../../types/product.ts";

interface Props {
    product: ProductFull
}

const ProductCard: React.FC<Props> = ({product}) => (
    <div className={styles.card}>
        <Link to={`/product/${product.id}`} className={styles.linkArea}>
            <img
                src={'https://santhimetaleshop.in/cdn/shop/files/Untitleddesign_26a5d7f4-82b7-4e7a-ac43-068a31086beb.png?v=1694498000&width=1445'}
                alt={product.name} className={styles.image}/>
            <div className={styles.info}>
                <div className={styles.row}>
                    <span className={styles.price}>{product.price} ₽</span>
                    <span
                        className={
                            product.is_active && product.stock_qty > 0
                                ? styles.available
                                : styles.unavailable
                        }
                    >
            {product.is_active && product.stock_qty > 0 ? 'В наличии' : 'Нет в наличии'}
          </span>
                </div>
                <p className={styles.name}>{product.name}</p>
            </div>
        </Link>

        <div className={styles.actions}>
            <button
                disabled={!product.is_active || product.stock_qty <= 0}
                className={styles.cartBtn}
            >
                В корзину
            </button>
        </div>
    </div>
)

export default ProductCard
