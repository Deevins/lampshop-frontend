import React, { useState } from 'react'
import { FaLightbulb } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import QuickActions from '../QuickActions/QuickActions'
import OrderStatusModal from '../OrderStatusModal/OrderStatusModal'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <FaLightbulb />
                        <span>LampShop</span>
                    </div>
                    <div className={styles.search}>
                        <SearchBar />
                    </div>
                    <div className={styles.actions}>
                        <QuickActions onStatusClick={() => setModalOpen(true)} />
                    </div>
                </div>
            </header>
            <OrderStatusModal open={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}

export default Header