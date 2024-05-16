import { rest } from 'msw'
import { API_BASE_URL } from '../Services/axios'
export const handlers = [
    rest.post(`${API_BASE_URL}/login`, (req, res, ctx) => {
        const { email, password } = req.body
        if (email === "test@gmail.com" && password === "password") {
            return res (
                ctx.status(200),
                ctx.json({ token: 'mock-token' })
            )
        }
        else {
            return res(
                ctx.status(401),
                ctx.json({error: "Invalid credentials"})
            )
        }
    })
]