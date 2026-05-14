export const createCinemaModel = raw => ({
    id: raw.id,
    name: raw.name,
    address: raw.address,
    city: raw.city,
    price: raw.price,
    facilities: raw.facilities,
})