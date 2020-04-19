import httpClient from './httpClient';

/**
 * @function createAccount
 * @params user:{}
 * @description register the user
 *
 */

export async function login(user_details) {
    const res = await httpClient.post('/login',  user_details);
    return res;
}

