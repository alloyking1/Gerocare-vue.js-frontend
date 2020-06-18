import httpsClient from "../httpClient";

export default{
    async all(){
        return httpsClient.get(`/`)
    }, 

    async create(id, data){
        return await httpsClient.post(`/sponsors/${id}/patients`, data);
    },

    async fetchServices(){
        return await httpsClient.get(`services`);
    }, 

    
}
