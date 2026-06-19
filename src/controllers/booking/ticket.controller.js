import { getInfoTicketIdService } from "../../services/api/ticket.service.js";

export const getTicketInfoIdController = async (id) => {
    return await getInfoTicketIdService(id);
}