import { initSelectSeat } from "../features/booking/controllers/select-seat.controller.js";
import { hideLoading } from "../shared/components/loading.js";

await initSelectSeat();
hideLoading();