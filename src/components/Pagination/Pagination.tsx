import React from 'react';
import styles from './Pagination.module.scss';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => (
    <div className={styles.pagination}>
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Назад
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
                key={page}
                className={page === currentPage ? styles.active : ''}
                onClick={() => onPageChange(page)}
            >
                {page}
            </button>
        ))}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Вперёд
        </button>
    </div>
);

export default Pagination;