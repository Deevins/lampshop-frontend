import React from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={onClose}>&times;</button>
            {children}
        </div>
    </div>
)

export default Modal