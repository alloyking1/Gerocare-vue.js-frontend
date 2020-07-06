import httpsClient from "../httpClient";

/**
 * @function getSponsor
 * @params NULL
 * @description Fetch all patients/elderly related to a sponsor
 *
 */

export async function getSponsor(id) {
  const res = await httpsClient.get(`/sponsors/${id}`);
  return res;
}

// get sponsors appointments
export async function getSponsorAppointment(id) {
  const response = await httpsClient.get(`/sponsors/${id}/appointments`);
  return response;
}

// get sponsor precription
export async function getSponsorPrescription(id) {
  const res = await httpsClient.get(`/sponsors/${id}/prescriptions`);
  return res;
}

/**
 * @function updateSponsor
 * @params sponsor{}
 * @description updates sponsors profile to db
 *
 */

export async function updateSponsor(id, sponsor) {
  const res = await httpsClient.patch(`/sponsors/${id}/update`, sponsor);
  return res;
}

/**change sponsors password */
export async function passwordReset(value) {
  return await httpsClient.post(`/password/reset`, value);
}

/**fetches all billing for a sponsor */
export async function transactions(id){
  return await httpsClient.get(`/sponsors/${id}/transactions`)
}
