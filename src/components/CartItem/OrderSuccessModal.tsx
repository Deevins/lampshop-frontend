import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './OrderSuccessModal.module.scss'

interface Props {
    orderId: string
    onClose: () => void
}

const OrderSuccessModal: React.FC<Props> = ({ orderId, onClose }) => {
    const navigate = useNavigate()

    return (
        <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={onClose}>×</button>
            <h2 className={styles.title}>Заказ создан</h2>
            <p>Заказу присвоен <strong>№{orderId}</strong>.</p>
            <p>Наши специалисты свяжутся с Вами в ближайшее время.</p>
            <p>
                Следить за заказом можно <span className={styles.link} onClick={() => navigate(`/order/${orderId}`)}>по ссылке</span>.
            </p>
            <button className={styles.actionBtn} onClick={() => navigate(`/order/${orderId}`)}>Перейти к заказу</button>
        </div>
    )
}

export default OrderSuccessModal
