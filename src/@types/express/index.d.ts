import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            user: {
                email?: string
                id?: string
                isAdm?: boolean
                isActive?: boolean
            }
        }
    }
}