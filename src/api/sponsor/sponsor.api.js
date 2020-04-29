import httpsClient from "../httpClient";

/**
 * @function getSponsor
 * @params NULL
 * @description Fetch all patients/elderly related to a sponsor
 *
 */

export async function getSponsor(id){
    const res = await httpsClient.get('/sponsors/users/'+id);
    return res;
}