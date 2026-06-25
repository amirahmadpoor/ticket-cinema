import { getShowTimesIdService } from "../services/showtimes.service.js"

export const getShowTimeIdController = async (id) => {
    return await getShowTimesIdService(id);
}