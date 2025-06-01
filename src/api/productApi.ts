import axios from 'axios';
import { ProductFull} from '../types/product';
import {Category} from "../types/category.ts";

const BASE_URL = 'http://localhost:8081';

export const getProductsMainCatalog = async (): Promise<ProductFull[]> => {
    const res = await axios.get(`${BASE_URL}/products`)

    return res.data.map((p: any) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        is_active: p.stock_qty > 0 && p.is_active,
        imageUrl: p.image_url,
        stock_qty: p.stock_qty,
        description: p.description,
    }))
}

export const fetchProductById = async (id: string): Promise<ProductFull> => {
    const res = await axios.get<ProductFull>(`${BASE_URL}/products/${id}`);

    return res.data;
};


export const getCategories = async (): Promise<Category[]> => {
    const res = await axios.get<Category[]>(`${BASE_URL}/categories`);
    return res.data;

}