import axios from "axios";
import {OrderStatus} from "../types/order.ts";


const ORDER_BASE_URL = 'http://localhost:8082';


export const getOrderStatusById = async (id: string) => {
    const response = await axios.get<OrderStatus>(`${ORDER_BASE_URL}/orders/${id}/status`)
    return response.data
}

export interface CustomerInfo {
    first_name: string
    last_name: string
    email: string
    phone: string
    address: string
}

export interface OrderItemInput {
    product_id: string
    qty: number
    unit_price: number
}

export interface PaymentInput {
    method: string
    paid: boolean
}

export interface CreateOrderRequest {
    items: OrderItemInput[]
    customer: CustomerInfo
    payment: PaymentInput
}

export const createOrder = async (data: CreateOrderRequest) => {
    const response = await axios.post(`${ORDER_BASE_URL}/checkout`, data)

    return response.data.order_id as string
}