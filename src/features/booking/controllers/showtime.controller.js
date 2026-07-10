import { getShowTimesIdService } from "../services/showtimes.service.js"

const getShowTimeIdController = async (id) => {
    return await getShowTimesIdService(id);
}

export {
    getShowTimeIdController
}
