import httpsClient from "../httpClient";

export default {

    /**
     * @function createComplaint
     * @params {subject, comment}
     * @description Inset complaint into db
     *
     */

    async createComplaint(id, data){
        const res = await httpsClient.post('/sponsors/'+id+'/feedbacks', data);
        return res;
    },


    /**
     * @function getComplaint
     * @params {subject, comment}
     * @description Inset complaint into db
     *
     */

    async getComplaint(id){
        const res = await httpsClient.get('/sponsors/'+id+'/feedbacks');
        return res;
    }
}
