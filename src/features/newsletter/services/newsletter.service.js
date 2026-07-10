import { BASE_URL } from "../../../config/api.js";
import { handleToastBox } from "../../../utils/helpers/show-toast.js";

const setNewsletterService = async (newUser) => {
    try {
        const response = await fetch(`${BASE_URL}/newsletter/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        return await response.json();
    } catch (err) {
        handleToastBox('عضویت با خطا مواجه شد.');
        console.error(err);
    }
}

export default setNewsletterService;