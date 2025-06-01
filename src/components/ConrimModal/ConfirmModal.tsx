import React, { useEffect, useRef } from 'react'
import styles from './ConfirmModal.module.scss'

type Props = {
    open: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
}

const ConfirmModal: React.FC<Props> = ({ open, onClose, onConfirm, title }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (open) {
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open, onClose])

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    if (!open) return null

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal} ref={modalRef}>
                <p>{title}</p>
                <div className={styles.actions}>
                    <button onClick={onConfirm} className={styles.confirm}>Удалить</button>
                    <button onClick={onClose}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
