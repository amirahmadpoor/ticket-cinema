import { getInfoTicketIdService } from "../services/ticket.service.js";

const getTicketInfoIdController = async (id) => {
    return await getInfoTicketIdService(id);
}

const handleTimer = (timerElem) => {
    let time = 5;
    timerElem.innerHTML = `00:${String(time).padStart(2, '0')}`
    let timer = setInterval(() => {
        time--;
        timerElem.innerHTML = `00:${String(time).padStart(2, '0')}`
        if (!time) {
            clearInterval(timer);
            location.pathname = 'index.html';
            return;
        }
    }, 1000)
}

export {
    getTicketInfoIdController,
    handleTimer
}