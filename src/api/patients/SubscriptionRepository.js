import httpsClient from "../httpClient";

export default {
  async createSubscription(id, data) {
    return await httpsClient.post(`/sponsors/${id}/subscriptions`, data);
  },

  async fetchSubscriptions(id) {
    return await httpsClient.get(`/sponsors/${id}/subscriptions`);
  },

  async downloadDetails(id, data){

      httpsClient({
        method: 'post',
        url: `/sponsors/${id}/backup`,
        data: {'type': data},
        responseType: 'arraybuffer'
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'file.xlsx') //or any other extension
          document.body.appendChild(link)
          link.click()
        
        })
        .catch(() => console.log('error occured'))
  },

  //   forceFileDownload(response){
      
  // },

};
