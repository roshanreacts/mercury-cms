import jwt, { JwtPayload } from 'jsonwebtoken';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';


export const setTokenCookie = (token: string) => {
    let expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);

    setCookie("authToken", token, {
        expires: expires
    });
}

export const getLoggedInUserCookie = () => {
    return getCookie("authToken");
}

export const checkTokenExpiry = () => {
    let token = getCookie("authToken")
    if (token) {
        const decodedToken = jwt.decode(token) as JwtPayload;

        const exp = decodedToken.exp ? decodedToken.exp : 0;

        if (exp < Math.floor(new Date().getTime() / 1000)) {

            deleteCookie("authToken");
            return true;
        }
    }
    else {
        return true;
    }
    return false;
}

export const clearTokenCookie = () => {
    deleteCookie("authToken");
}

export const getLoggedInUserIdFromCookie = () => {
    let token = getCookie("authToken");
    if (token) {
        const decodedToken = jwt.decode(token) as JwtPayload;

        const id = decodedToken.id ? decodedToken.id : "";
        return id;
    }
    return undefined
}

export const getLoggedInUserRoleFromCookie = () => {
    let token = getCookie("authToken");
    if (token) {
        const decodedToken = jwt.decode(token) as JwtPayload;

        const role = decodedToken.role ? decodedToken.role : "";
        return role;
    }
    return undefined;
}