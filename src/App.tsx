import React from 'react'
import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'

const App: React.FC = () => (
    <>
        <Header />
        <NavMenu />
        <div className="container">
            <main>
                <section style={{ padding: '1rem', alignItems: "center" }}>
                    <h1 >Магазин лампочек LampShop</h1>
                    <p>
                        Добро пожаловать в LampShop — ваш надежный партнер в мире освещения! У нас вы найдете лампочки всех типов: от классических и светодиодных до умных решений для «умного дома».
                    </p>
                    <p>
                        Мы предлагаем качественную продукцию от ведущих производителей по выгодным ценам, с доставкой по всей России.
                    </p>
                </section>
                <Catalog />
            </main>
        </div>
        <Footer />
    </>

)

export default App