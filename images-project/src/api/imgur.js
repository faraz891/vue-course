import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_IMGUR;
const ROOT_URL = process.env.VUE_APP_IMGUR_ROOT_URL;


export default{
    login: () => {
        const queryString = {
            client_id: CLIENT_ID,
            response: 'token',
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
    }
}