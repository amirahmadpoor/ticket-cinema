export const createAuthModel = raw => ({
    username:raw.name,
    email:raw.email,
    password:raw.password,
})