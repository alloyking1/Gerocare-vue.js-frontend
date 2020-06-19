import httpsClient from "../httpClient";

export default {
  async createSubscription(id, data) {
    return await httpsClient.post(`/sponsors/${id}/subscriptions`, data);
  },

  async fetchSubscriptions(id) {
    return await httpsClient.get(`/sponsors/${id}/subscriptions`);
  }
};
