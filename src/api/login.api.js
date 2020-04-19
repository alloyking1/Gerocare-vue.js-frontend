import httpClient from './httpClient';

/**
 * @function Login
 * @params user:{email:'email', password:'password'}
 * @description Logins user using through this call
 *
 */

export async function login(user_details) {
    const res = await httpClient.post('/login',  user_details);
    return res;
}

/**
 * @function Logout
 * @params Null
 * @description logs out user
 *
 */
export async function logOut(){
    const res = await httpClient.post('/logout');
    return res
}

