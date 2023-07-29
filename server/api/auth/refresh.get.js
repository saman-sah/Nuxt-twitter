
import { sendError } from "h3"
import {getRefreshTokenByToken} from "../../db/refreshToken.js"
export default defineEventHandler(async(event)=> {
    const cookies = useCookies(event)

    const refreshToken = cookies.refresh_token

    if(!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage:'Refresh token is invalid'
        }))
    }

    rToken= await getRefreshTokenByToken(refreshToken)

    return {
       hello: rToken
    }
})