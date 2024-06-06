import axios from "axios";

const baseUrl = "https://graph.facebook.com/v20.0/";

export const fetchMessages = async (token, coversationId) => {
  const options = {
    params: {
      access_token: token,
    },
  };
  const response = await axios.get(
    `${messageUrl}${coversationId}/messages`,
    options
  );

  const data = response?.data?.data
  const messagePromises = data.map(async (item) => {
    const message = await axios.get(`${baseUrl}${item.id}?fields=id,created_time,from,to,message`, options);
    return message.data;
});

  const results = await Promise.all(messagePromises);
  return results
};


export const replyMessage = async(token, pageId, data) => {
  const {PSID, message} = data;
  const replyUrl =`${baseUrl}${pageId}/messages?recipient={id:${PSID}}&message={text:"${message}"}&messaging_type=RESPONSE&access_token=${token}`
  
  const response = await axios.post(
    replyUrl
  );
  return response.data
}
