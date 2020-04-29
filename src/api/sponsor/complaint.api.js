import httpsClient from "../httpClient";

/**
 * @function createComplaint
 * @params {subject, comment}
 * @description Inset complaint into db
 *
 */

export async function createComplaint(id, complaint){
    const res = await httpsClient.post('/sponsors/'+id+'/feedbacks', complaint);
    return res;
}