import React, {useEffect, useState} from 'react'
import styles from './Catalog.module.scss'
import ProductCard from './ProductCard'
import Pagination from '../Pagination/Pagination'
import {getProductsMainCatalog} from "../../api/productApi.ts";
import {ProductFull} from "../../types/product.ts";

const ITEMS_PER_PAGE = 10

const Catalog: React.FC = () => {
    const [products, setProducts] = useState<ProductFull[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getProductsMainCatalog().then(setProducts)
    }, [])

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const pageItems = products.slice(start, start + ITEMS_PER_PAGE)


    return (
        <section className={styles.catalog}>
            <h2>Каталог</h2>

            <div className={styles.grid}>
                {pageItems.map((p) => (
                    <ProductCard key={p.id} product={p}/>
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </section>
    )
}

export default Catalog
