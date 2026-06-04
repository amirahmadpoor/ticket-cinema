
const BASE_URL = 'http://localhost:3000/api'

export const reservationService = async (infoReserve) => {
    const response = await fetch(`${BASE_URL}/reservations`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoReserve)
    });

    return await response.json();
}

// export const editReserveStatusService = async (newInfoReserve) => {
//     const response = await fetch(`${BASE_URL}/reservations`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newInfoReserve)
//     })

//     const data = await response.json();
//     return data;
// }