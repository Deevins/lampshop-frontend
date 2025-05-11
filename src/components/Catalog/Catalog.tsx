import React from 'react'
import styles from './Catalog.module.scss'
import ProductCard from './ProductCard'
import { products } from '../../mocks/products'

const Catalog: React.FC = () => (
    <section className={styles.catalog}>
        <h2>Каталог</h2>
        <div className={styles.grid}>
            {products.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    </section>
)

export default Catalog