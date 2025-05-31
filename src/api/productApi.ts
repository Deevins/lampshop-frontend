import axios from 'axios';
import { Product } from '../types/product';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081/api';

export const fetchAllProducts = async (): Promise<Product[]> => {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
    const res = await axios.post(`${BASE_URL}/products`, product);
    return res.data;
};

export const updateProduct = async (id: number, product: Omit<Product, 'id'>): Promise<Product> => {
    const res = await axios.put(`${BASE_URL}/products/${id}`, product);
    return res.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/products/${id}`);
};
