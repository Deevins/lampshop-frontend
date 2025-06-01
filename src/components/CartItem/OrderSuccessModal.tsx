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
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                <h2 className={styles.title}>Заказ создан</h2>
                <p className={styles.text}>Заказу присвоен <strong>№{orderId}</strong>.</p>
                <p className={styles.text}>Наши специалисты свяжутся с Вами в ближайшее время.</p>
                <p className={styles.text}>
                    Следить за заказом можно <span className={styles.link} onClick={() => navigate(`/order/${orderId}`)}>по ссылке</span>.
                </p>
                <button className={styles.actionBtn} onClick={() => navigate(`/order/${orderId}`)}>Перейти к заказу</button>
            </div>
        </div>
    )
}

export default OrderSuccessModal
