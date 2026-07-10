import setNewsletterService from "../services/newsletter.service.js";
import { handleToastBox } from "../../../utils/helpers/show-toast.js";

const newsletterController = async (newUser) => {
    try {
        return await setNewsletterService(newUser);
    } catch (err) {
        handleToastBox('عضویت ناموفق بود.');
        console.error(err);
    }
}

export default newsletterController;