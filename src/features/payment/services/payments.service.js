import { BASE_URL } from "../../../config/api.js";

;

export const createPaymentsService = async (infoPayment) => {
    const response = await fetch(`${BASE_URL}/payments`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoPayment)
    });
    console.log(response);

    return response.json();
}