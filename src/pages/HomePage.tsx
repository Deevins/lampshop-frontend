import React from 'react'
import Catalog from '../components/Catalog/Catalog'
import './HomePage.module.scss'

const HomePage: React.FC = () => (
    <>
        <section className="intro">
            <h1>Магазин лампочек LampShop</h1>
            <p>
                Добро пожаловать в LampShop — ваш надёжный партнёр в мире освещения! У нас вы найдёте
                лампочки всех типов: от классических и светодиодных до умных решений для «умного дома».
            </p>
            <p>
                Мы предлагаем качественную продукцию от ведущих производителей по выгодным ценам,
                с доставкой по всей России.
            </p>
        </section>
        <Catalog />
    </>
)

export default HomePage