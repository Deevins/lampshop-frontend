import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import CartPage from './pages/CartPage'
import './styles/global.scss'
import ItemPage from "./pages/ItemPage";

const App: React.FC = () => (
    <div className="app">
        <Header />
        <NavMenu />

        <main className="main-content">
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product/:id" element={<ItemPage />} />
                </Routes>
            </div>
        </main>

        <Footer />
    </div>
)

export default App