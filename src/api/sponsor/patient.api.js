import httpsClient from "../httpClient";

/**
 * @function allPatients
 * @params NULL
 * @description Fetch all patients/elderly related to a sponsor
 *
 */

export async function allPatients(id){
    const res = await httpsClient.get('/sponsors/'+id+'patients/');
    return res;
}

