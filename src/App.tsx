import React from 'react'
import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'

const App: React.FC = () => (
    <div className="app">
        <Header />
        <NavMenu />
        <main className="container main-content">
            <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                <h1>Магазин лампочек LampShop</h1>
                <p>
                    Добро пожаловать в LampShop — ваш надежный партнер в мире освещения! У нас вы найдете лампочки всех типов: от классических и светодиодных до умных решений для «умного дома».
                </p>
                <p>
                    Мы предлагаем качественную продукцию от ведущих производителей по выгодным ценам, с доставкой по всей России.
                </p>
            </section>
            <Catalog />
        </main>
        <Footer />
    </div>
);
export default App