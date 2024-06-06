import axios from 'axios';
const pageUrl = 'https://graph.facebook.com/v20.0/me?fields=id,name,accounts,adaccounts';


export const fetchPages = async(token) => {

    const options = {
        params: {
            access_token: token
        }
    }
    const response = await axios.get(pageUrl, options);
    return response.data;
}