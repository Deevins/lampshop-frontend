import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './CartItem.module.scss'
import { Product } from '../../mocks/products.tsx'

type Props = {
    item: Product & { quantity: number }
    onIncrease: () => void
    onDecrease: () => void
    onRemove: () => void
}

const CartItem: React.FC<Props> = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className={styles.item}>
            <img src={item.imageUrl} alt={item.name} className={styles.image} />
            <div className={styles.details}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>{item.price} ₽</p>
                <p className={item.available ? styles.statusAvailable : styles.statusUnavailable}>
                    {item.available ? 'В наличии' : 'Нет в наличии'}
                </p>
            </div>

            <div className={styles.controls}>
                <button onClick={onDecrease}>-</button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button onClick={onIncrease}>+</button>
            </div>

            <button className={styles.removeBtn} onClick={onRemove}>
                <AiOutlineClose />
            </button>
        </div>
    )
}

export default CartItem
