import httpClient from './httpClient';


export default {

    /**
     * @Login
     * @params user:{email:'email', password:'password'}
     * @description Logins user using through this call
     *
     */

    async login(data) {
        const res = await httpClient.post('/auth/login',  data);
        return res;
    },


    /**register user */
    async register(data){
        const res = await httpClient.post('/auth/register', data)
        return res
    },

    /**
     * @Logout
     * @params Null
     * @description logs out user
     *
     */
    async logOut(){
        const res = await httpClient.post('/auth/logout');
        return res
    },

    /**
     * @Resets password
     * @params email:user_email
     * @description Sends password reset link to user email 
     *
     */

    async passwordReset(data) {
        const res = await httpClient.post('/auth/password/email', data);
        return res;
    },

    /**
     * @save newly created passwords
     * @params email:user_email, password
     * @description Sends password reset link to user email 
     *
     */

    async RequestNewReset(data) {
        const res = await httpClient.post('/auth/password/reset',data);
        return res;
    },


}
