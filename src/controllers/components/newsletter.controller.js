import { setNewsletterService } from "../../services/api/newsletter.service.js";

export const newsletterController = async (newUser) => {
    try {
        return await setNewsletterService(newUser);
    } catch (err) {
        console.log(err);
    }
}