import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Modal from '../Modal/Modal'
import styles from './OrderStatusModal.module.scss'

interface Props {
    open: boolean
    onClose: () => void
}

const OrderStatusModal: React.FC<Props> = ({open, onClose}) => {
    const [orderId, setOrderId] = useState('')
    const navigate = useNavigate()

    if (!open) return null

    const handleCheckStatus = () => {
        if (!orderId.trim()) return
        navigate(`/order/${orderId.trim()}`)
        onClose() // закрываем модалку после перехода
    }

    return (
        <Modal onClose={onClose}>
            <h2 className={styles.title}>Статус заказа</h2>
            <input
                className={styles.input}
                type="text"
                placeholder="Номер заказа"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <button className={styles.button} onClick={handleCheckStatus}>
                Узнать статус
            </button>
        </Modal>
    )
}

export default OrderStatusModal
