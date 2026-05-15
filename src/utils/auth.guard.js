export async function checkAuth() {
    const BASE_URL = 'http://localhost:3000/api/auth';
    const token = localStorage.getItem('accessToken');


    if (!token) {
        window.location.href = '/pages/signin-signup.html';
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok()) {
            throw new Error('Unauthorized');
        }

        const data = await response.json();
        console.log(data.data);
    } catch (err) {
        localStorage.removeItem('accessToken');
        window.location.href = '/index.html';
    }
}