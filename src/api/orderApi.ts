import axios from "axios";
import {OrderStatus} from "../types/order.ts";


const ORDER_BASE_URL = 'http://localhost:8082';


export const getOrderStatusById = async (id: string) => {
    const response = await axios.get<OrderStatus>(`${ORDER_BASE_URL}/orders/${id}/status`)
    return response.data
}

export interface CustomerInfo {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
}

export interface OrderRequest {
    items: {
        productId: string
        quantity: number
    }[]
    customer: CustomerInfo
}

export const createOrder = async (data: OrderRequest) => {
    const response = await axios.post(`${ORDER_BASE_URL}/checkout`, data)
    return response.data.id as string
}