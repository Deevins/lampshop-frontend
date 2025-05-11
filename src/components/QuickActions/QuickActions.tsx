import React from 'react';
import { AiOutlineHeart, AiOutlineClockCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './QuickActions.module.scss';

const actions = [
    { icon: <AiOutlineHeart />, label: 'Избранное' },
    { icon: <AiOutlineClockCircle />, label: 'Статус заказа' },
    { icon: <AiOutlineShoppingCart />, label: 'Корзина' },
];

const QuickActions: React.FC = () => (
    <div className={styles.quickActions}>
        {actions.map((a, i) => (
            <div key={i} className={styles.action} title={a.label}>
                <div className={styles.icon}>{a.icon}</div>
                <div className={styles.label}>{a.label}</div>
            </div>
        ))}
    </div>
);

export default QuickActions;