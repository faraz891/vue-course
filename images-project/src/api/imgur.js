import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_IMGUR;
const ROOT_URL = "https://api.imgur.com"

export default{
    login: () => {
        //https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
    }
}