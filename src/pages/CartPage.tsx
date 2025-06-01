import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styles from './CartPage.module.scss'
import {products, Product} from '../mocks/products'
import CartItem from '../components/CartItem/CartItem.tsx'
import ConfirmModal from '../components/ConrimModal/ConfirmModal.tsx'
import {createOrder, CreateOrderRequest} from "../api/orderApi.ts";
import OrderSuccessModal from "../components/CartItem/OrderSuccessModal.tsx";

type CartItem = Product & { quantity: number }

const initialCart: CartItem[] = products
    .map(p => ({...p, quantity: 1}))

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null)
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    })

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setCustomer(prev => ({...prev, [name]: value}))
    }
    const [successOrderId, setSuccessOrderId] = useState<string | null>(null)

    const handleSubmit = async () => {
        try {
            const orderData: CreateOrderRequest = {
                customer: {
                    first_name: customer.firstName,
                    last_name: customer.lastName,
                    email: customer.email,
                    phone: customer.phone,
                    address: customer.address
                },
                items: cart.map(item => ({
                    product_id: item.id,
                    qty: item.quantity,
                    unit_price: item.price
                })),
                payment: {
                    method: 'card',
                    paid: false
                }
            }

            const id = await createOrder(orderData)
            setSuccessOrderId(id)
        } catch (e) {
            console.error('Ошибка оформления заказа:', e)
        }
    }

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

            <form className={styles.form} onSubmit={e => {
                e.preventDefault();
                handleSubmit()
            }}>
                <h3 className={styles.formTitle}>Оформление заказа</h3>
                <div className={styles.formRow}>
                    <div>
                        <label>Имя:</label>
                        <input type="text" name="firstName" value={customer.firstName} onChange={handleChange}
                               required/>
                    </div>
                    <div>
                        <label>Фамилия:</label>
                        <input type="text" name="lastName" value={customer.lastName} onChange={handleChange} required/>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div>
                        <label>E-mail:</label>
                        <input type="email" name="email" value={customer.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Телефон:</label>
                        <input type="tel" name="phone" value={customer.phone} onChange={handleChange} required/>
                    </div>
                </div>
                <div className={styles.formColumn}>
                    <label>Адрес:</label>
                    <input type="text" name="address" value={customer.address} onChange={handleChange} required/>
                </div>
            </form>

            <div className={styles.actions}>
                <button className={styles.orderBtn} onClick={handleSubmit}>Оформить заказ</button>
            </div>

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
