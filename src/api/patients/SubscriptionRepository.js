
import httpsClient from "../httpClient";

export default{
    async createSubscription(id, data){
        return await httpsClient.post(`/sponsors/${id}/subscriptions`, data);
    }
}