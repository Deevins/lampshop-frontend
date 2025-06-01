import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styles from './CartPage.module.scss'
import {products, Product} from '../mocks/products'
import CartItem from '../components/CartItem/CartItem.tsx'
import ConfirmModal from "../components/ConrimModal/ConfirmModal.tsx";

type CartItem = Product & { quantity: number }

const initialCart: CartItem[] = products
    .slice(0, 2)
    .map(p => ({...p, quantity: 1}))

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null)

    const navigate = useNavigate()


    if (cart.length === 0) {
        return (
            <div className={styles.empty}>
                <AiOutlineShoppingCart className={styles.icon}/>
                <h2>В корзине нет товаров</h2>
                <p>Чтобы добавить товар в корзину, нажмите «В корзину» рядом с товаром</p>
                <button onClick={() => navigate('/')}>Перейти в каталог</button>
            </div>
        )
    }

    const increase = (id: string) =>
        setCart(cs =>
            cs.map(item =>
                item.id === id ? {...item, quantity: item.quantity + 1} : item
            )
        )

    const decrease = (id: string) =>
        setCart(cs =>
            cs
                .map(item =>
                    item.id === id
                        ? {...item, quantity: Math.max(1, item.quantity - 1)}
                        : item
                )
                .filter(item => item.quantity > 0)
        )

    const remove = (id: string) => {
        setPendingRemoveId(id)
        setConfirmOpen(true)
    }

    const onConfirmRemove = () => {
        if (pendingRemoveId) {
            setCart(cs => cs.filter(item => item.id !== pendingRemoveId))
        }
        setConfirmOpen(false)
        setPendingRemoveId(null)
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className={styles.cart}>
            <h2 className={styles.title}>Корзина</h2>
            <div className={styles.items}>
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onIncrease={() => increase(item.id)}
                        onDecrease={() => decrease(item.id)}
                        onRemove={() => remove(item.id)}
                    />
                ))}
            </div>

            <div className={styles.summary}>
                <span>Итого:</span>
                <span className={styles.totalValue}>{total} ₽</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.orderBtn}>Оформить заказ</button>
            </div>
            <ConfirmModal
                open={confirmOpen}
                title="Вы точно хотите удалить товар из корзины?"
                onClose={() => setConfirmOpen(false)}
                onConfirm={onConfirmRemove}
            />
        </div>
    )
}

export default CartPage
