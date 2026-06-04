import { getShowTimesIdService } from "../../services/api/showtimes.service.js"

export const getShowTimeIdController = async (id) => {
    return await getShowTimesIdService(id);
}