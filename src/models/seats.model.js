export const createSeatModel = raw => ({
    id: raw.id,
    showtime_id: raw.showtime_id,
    row: raw.row_label,
    number: raw.seat_number,
    status: raw.status
})