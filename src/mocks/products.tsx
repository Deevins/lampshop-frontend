import Image from '../assets/lamp.png';

export interface Product {
    id: string
    name: string
    price: number
    available: boolean
    imageUrl: string
}

export const products: Product[] = Array.from({ length:1 }).map((_, i) => ({
    id: `9829f5e2-cc32-4b53-ad70-ae5c7d2cb5b6`,
    name: 'Светодиодная лампа MR16 GU5.3 7Вт 220В 3000K',
    price: 140,
    available: i % 3 !== 1,
    imageUrl: `${Image}`
}))

export const categories: string[] = [
    'Розетки и выключатели',
    'Лампочки',
    ...Array(8).fill('Кабели')
]