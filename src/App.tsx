import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import './styles/global.scss'
import ItemPage from "./pages/ItemPage";
import OrderStatusPage from "./pages/OrderStatusPage.tsx";

const App: React.FC = () => (
    <div className="app">
        <Header/>
        <NavMenu/>

        <main className="main-content">
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/product/:id" element={<ItemPage/>}/>
                    <Route path="/order/:id" element={<OrderStatusPage/>}/>
                </Routes>
            </div>
        </main>

        <Footer/>
    </div>
)

export default App