import httpsClient from "../httpClient";

/**
 * @function allPatients
 * @params NULL
 * @description Fetch all patients/elderly related to a sponsor
 *
 */

export async function allPatients(id){
    const res = await httpsClient.get('/sponsors/'+id+'/patients/');
    return res;
}

/**
 * @function createPatients
 * @params 
 * @description Create a new patient
 *
 */

export async function createPatients(id, patients){
    const res = await httpsClient.post(`/sponsors/${id}/patients`, patients);
    return res;
}


// delete patient
export async function deletePatient(id, patientsId){
    const res = await httpsClient.delete(`/sponsors/${id}/patients/${patientsId}`);
    return res;
}

// find patient
export async function findPatient(id, patientsId){
    const res = await httpsClient.get(`/sponsors/${id}/patients/${patientsId}`);
    return res
}

// Edit patient
export async function editPatient(sponsorId, patientId, patients){
    const res = await httpsClient.patch(`/sponsors/${sponsorId}/patients/${patientId}`, patients); 
    return res
}
