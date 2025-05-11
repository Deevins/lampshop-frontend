import Image from '../assets/lamp.png';

export interface Product {
    id: string
    name: string
    price: number
    available: boolean
    liked: boolean
    imageUrl: string
}

export const products: Product[] = Array.from({ length: 30 }).map((_, i) => ({
    id: `${i + 1}`,
    name: 'Светодиодная лампа MR16 GU5.3 7Вт 220В 3000K',
    price: 140,
    available: i % 3 !== 1,
    liked: i % 4 === 2,
    imageUrl: `${Image}`
}))

export const categories: string[] = [
    'Розетки и выключатели',
    'Лампочки',
    ...Array(8).fill('Кабели')
]