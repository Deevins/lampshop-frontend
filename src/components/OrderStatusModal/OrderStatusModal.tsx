import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './OrderStatusModal.module.scss'

interface Props {
    open: boolean
    onClose: () => void
}

const OrderStatusModal: React.FC<Props> = ({ open, onClose }) => {
    const [orderId, setOrderId] = useState('')
    if (!open) return null
    return (
        <Modal onClose={onClose}>
            <h2 className={styles.title}>Статус заказа</h2>
            <input
                className={styles.input}
                type="text"
                placeholder="Номер заказа"
                value={orderId}
                onChange={e => setOrderId(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={() => alert(`Checking status for ${orderId}`)}
            >
                Узнать статус
            </button>
        </Modal>
    )
}

export default OrderStatusModal