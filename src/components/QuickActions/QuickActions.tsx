import React from 'react'
import {
    AiOutlineHeart,
    AiOutlineClockCircle,
    AiOutlineShoppingCart,
} from 'react-icons/ai'
import styles from './QuickActions.module.scss'

interface Props {
    onStatusClick: () => void
}

const QuickActions: React.FC<Props> = ({ onStatusClick }) => {
    const actions = [
        { icon: <AiOutlineHeart />, label: 'Избранное' },
        { icon: <AiOutlineClockCircle />, label: 'Статус заказа', onClick: onStatusClick },
        { icon: <AiOutlineShoppingCart />, label: 'Корзина' },
    ]

    return (
        <div className={styles.quickActions}>
            {actions.map((a, i) => (
                <div
                    key={i}
                    className={styles.action}
                    title={a.label}
                    onClick={() => a.onClick && a.onClick()}
                >
                    <div className={styles.icon}>{a.icon}</div>
                    <div className={styles.label}>{a.label}</div>
                </div>
            ))}
        </div>
    )
}

export default QuickActions