import { createPaymentsService } from "../services/payments.service.js";

export const createPayment = async (infoPayment) => {
    try {
        const response = await createPaymentsService(infoPayment);
        console.log(response);
        
        return response;
    } catch (error) {
        throw new Error('Error creating payment');
    }
}