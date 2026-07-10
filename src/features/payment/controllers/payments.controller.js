import createPaymentsService from "../services/payments.service.js";

const createPayment = async (infoPayment) => {
    try {
        return await createPaymentsService(infoPayment);
    } catch (error) {
        throw new Error('Error creating payment');
    }
}

export default createPayment;