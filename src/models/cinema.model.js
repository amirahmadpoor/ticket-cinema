export const createCinemaModel = raw => ({
    id: raw.id,
    name: raw.name,
    address: raw.address,
    city: raw.city,
    phone: raw.phone,
    facilities: raw.facilities,
})