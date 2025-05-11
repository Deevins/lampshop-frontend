import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './CartPage.module.scss'
import { products, Product } from '../mocks/products'

type CartItem = Product & { quantity: number }

// Example starter cart; in real life you'd fetch this
const initialCart: CartItem[] = products
    .slice(0, 2)
    .map(p => ({ ...p, quantity: 1 }))

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart)
    const navigate = useNavigate()

    // EMPTY STATE
    if (cart.length === 0) {
        return (
            <div className={styles.empty}>
                <AiOutlineShoppingCart className={styles.icon} />
                <h2>В корзине нет товаров</h2>
                <p>Чтобы добавить товар в корзину, нажмите «В корзину» рядом с товаром</p>
                <button onClick={() => navigate('/')}>Перейти в каталог</button>
            </div>
        )
    }

    // NORMAL CART RENDER
    const increase = (id: string) =>
        setCart(cs =>
            cs.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )

    const decrease = (id: string) =>
        setCart(cs =>
            cs
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item
                )
                .filter(item => item.quantity > 0)
        )

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className={styles.cart}>
            <h2 className={styles.title}>Корзина</h2>

            <div className={styles.items}>
                {cart.map(item => (
                    <div key={item.id} className={styles.item}>
                        <img src={item.imageUrl} alt={item.name} className={styles.image} />
                        <div className={styles.details}>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.price}>{item.price} ₽</p>
                            <p
                                className={
                                    item.available ? styles.statusAvailable : styles.statusUnavailable
                                }
                            >
                                {item.available ? 'В наличии' : 'Нет в наличии'}
                            </p>
                        </div>
                        <div className={styles.controls}>
                            <button onClick={() => decrease(item.id)}>-</button>
                            <span className={styles.quantity}>{item.quantity}</span>
                            <button onClick={() => increase(item.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.summary}>
                <span>Итого:</span>
                <span className={styles.totalValue}>{total} ₽</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.orderBtn}>Оформить заказ</button>
            </div>
        </div>
    )
}

export default CartPage
