import { BASE_URL } from "../../../config/api.js";
// import { handleApiError } from "../../../utils/error-handler.js";


export const createPaymentsService = async (infoPayment) => {
    try {
        const response = await fetch(`${BASE_URL}/payments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoPayment)
        });
        // const hasError = await handleApiError(response);
        // if (hasError) return;

        return response.json();
    } catch (err) {
        console.error(err);

    }
}