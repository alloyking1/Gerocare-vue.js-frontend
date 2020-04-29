import httpsClient from "../httpClient";

/**
 * @function allPatients
 * @params NULL
 * @description Fetch all patients/elderly related to a sponsor
 *
 */

export async function allPatients(){
    const res = await httpsClient.get('/sponsors/patients/');
    return res;
}