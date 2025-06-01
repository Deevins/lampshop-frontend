// CartPage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './CartPage.module.scss'
import { products, Product } from '../mocks/products'
import CartItem from '../components/CartItem/CartItem.tsx'
import ConfirmModal from '../components/ConrimModal/ConfirmModal.tsx'
import { createOrder } from '../api/orderApi.ts'
import OrderSuccessModal from '../components/CartItem/OrderSuccessModal.tsx'
import { useForm } from 'react-hook-form'

type CartItem = Product & { quantity: number }

type CustomerForm = {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
}

const initialCart: CartItem[] = products
    .map(p => ({ ...p, quantity: 1 }))

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null)
    const [successOrderId, setSuccessOrderId] = useState<string | null>(null)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
    } = useForm<CustomerForm>()

    const onSubmit = async (data: CustomerForm) => {
        try {
            const orderData = {
                customer: data,
                items: cart.map(item => ({
                    productId: item.id,
                    quantity: item.quantity
                }))
            }

            const id = await createOrder(orderData)
            setSuccessOrderId(id)
            setCart([])
            reset()
        } catch (e) {
            console.error('Ошибка оформления заказа:', e)
        }
    }

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

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.formTitle}>Оформление заказа</h3>
                <div className={styles.formRow}>
                    <div>
                        <label>Имя:</label>
                        <input type="text" {...register('firstName', { required: true })} />
                    </div>
                    <div>
                        <label>Фамилия:</label>
                        <input type="text" {...register('lastName', { required: true })} />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div>
                        <label>E-mail:</label>
                        <input type="email" {...register('email', { required: true })} />
                    </div>
                    <div>
                        <label>Телефон:</label>
                        <input type="tel" {...register('phone', { required: true })} />
                    </div>
                </div>
                <div className={styles.formColumn}>
                    <label>Адрес:</label>
                    <input type="text" {...register('address', { required: true })} />
                </div>

                <div className={styles.actions}>
                    <button className={styles.orderBtn} type="submit">Оформить заказ</button>
                </div>
            </form>

            <ConfirmModal
                open={confirmOpen}
                title="Вы точно хотите удалить товар из корзины?"
                onClose={() => setConfirmOpen(false)}
                onConfirm={onConfirmRemove}
            />
            {successOrderId && (
                <OrderSuccessModal
                    orderId={successOrderId}
                    onClose={() => setSuccessOrderId(null)}
                />
            )}
        </div>
    )
}

export default CartPage
