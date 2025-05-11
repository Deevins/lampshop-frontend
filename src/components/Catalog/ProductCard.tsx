import React from 'react'
import styles from './ProductCard.module.scss'
import { Product } from '../../mocks/products'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface Props { product: Product }

const ProductCard: React.FC<Props> = ({ product }) => (
    <div className={styles.card}>
        <img src={product.imageUrl} alt={product.name} />
        <div className={styles.info}>
            <div className={styles.row}>
                <span className={styles.price}>{product.price} ₽</span>
                <span
                    className={
                        product.available ? styles.available : styles.unavailable
                    }
                >
          {product.available ? 'В наличии' : 'Нет в наличии'}
        </span>
            </div>
            <p className={styles.name}>{product.name}</p>
            <div className={styles.actions}>
                <button disabled={!product.available}>В корзину</button>
                {product.liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
        </div>
    </div>
)

export default ProductCard
