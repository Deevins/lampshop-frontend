import axios from "axios";
import {OrderStatus} from "../types/order.ts";


const ORDER_BASE_URL =  'http://localhost:8082';


export const getOrderStatusById = async (id: string) => {
    const response = await axios.get<OrderStatus>(`${ORDER_BASE_URL}/orders/${id}/status`)
    return response.data
}