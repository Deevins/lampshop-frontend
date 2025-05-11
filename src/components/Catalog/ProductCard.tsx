import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import styles from './ProductCard.module.scss'
import { Product } from '../../mocks/products'

interface Props { product: Product }

const ProductCard: React.FC<Props> = ({ product }) => (
    <div className={styles.card}>
        <Link to={`/product/${product.id}`} className={styles.linkArea}>
            <img src={product.imageUrl} alt={product.name} className={styles.image} />
            <div className={styles.info}>
                <div className={styles.row}>
                    <span className={styles.price}>{product.price} ₽</span>
                    <span
                        className={
                            product.available
                                ? styles.available
                                : styles.unavailable
                        }
                    >
            {product.available ? 'В наличии' : 'Нет в наличии'}
          </span>
                </div>
                <p className={styles.name}>{product.name}</p>
            </div>
        </Link>

        <div className={styles.actions}>
            <button
                disabled={!product.available}
                className={styles.cartBtn}
            >
                В корзину
            </button>
            {product.liked
                ? <AiFillHeart className={styles.heart} />
                : <AiOutlineHeart className={styles.heart} />
            }
        </div>
    </div>
)

export default ProductCard
