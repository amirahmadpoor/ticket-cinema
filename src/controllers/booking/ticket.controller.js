import { getInfoTicketIdService } from "../../services/api/ticket.service.js";

export const getTicketInfoIdController = async (id) => {
    console.log(await getInfoTicketIdService(id));

    return await getInfoTicketIdService(id);
}