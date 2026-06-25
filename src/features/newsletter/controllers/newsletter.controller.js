import { setNewsletterService } from "../services/newsletter.service.js";

export const newsletterController = async (newUser) => {
    try {
        return await setNewsletterService(newUser);
    } catch (err) {
        console.log(err);
    }
}