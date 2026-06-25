import { getInfoTicketIdService } from "../services/ticket.service.js";

export const getTicketInfoIdController = async (id) => {
    return await getInfoTicketIdService(id);
}