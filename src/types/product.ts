export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    is_active: boolean;
    favorite: boolean;
}


export interface ProductFull {
    id: string
    name: string
    price: number
    is_active: boolean
    imageUrl: string
    stock_qty: number
    description: string
}