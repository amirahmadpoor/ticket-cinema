const BASE_URL = 'http://localhost:3000/api';

export const setNewsletterService = async (newUser) => {
    const response = await fetch(`${BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    return await response.json();

}