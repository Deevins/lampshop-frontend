import styles from './OrderStatusPage.module.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {OrderStatus} from "../types/order.ts";
import {getOrderStatusById} from "../api/orderApi.ts";
import {paymentStatusMap} from "../utils/repack.ts";


const OrderStatusPage = () => {
    const { id } = useParams()
    const [order, setOrder] = useState<OrderStatus | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return
        const fetchOrder = async () => {
            try {
                const data = await getOrderStatusById(id)
                console.log(data)
                setOrder(data)
            } catch (err) {
                setError('Ошибка загрузки заказа')
            } finally {
                setLoading(false)
            }
        }

        fetchOrder()
    }, [id])

    if (loading) return <div className={styles.container}>Загрузка...</div>
    if (error) return <div className={styles.container}>{error}</div>
    if (!order) return <div className={styles.container}>Заказ не найден</div>

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Статус заказа</h2>
                <div className={styles.row}>
                    <span className={styles.label}>Заказ:</span>
                    <span className={styles.value}>{order.order_id}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.label}>Статус:</span>
                    <span className={styles.value}>{paymentStatusMap[order.status]}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.label}>Сумма:</span>
                    <span className={styles.value}>{order.amount}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderStatusPage
