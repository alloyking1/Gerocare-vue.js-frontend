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

/**
 * @function Resets password
 * @params email:user_email
 * @description Sends password reset link to user email 
 *
 */

export async function passwordReset(email) {
    const res = await httpClient.post('/password/email', email);
    return res;
}

/**
 * @function save newly created passwords
 * @params email:user_email, password
 * @description Sends password reset link to user email 
 *
 */

export async function RequestNewReset({
        email,
        password,
        password_confirmation,
    }) {
    const res = await httpClient.post('/password/reset',{
        email,
        password,
        password_confirmation,
    });
    return res;
}

