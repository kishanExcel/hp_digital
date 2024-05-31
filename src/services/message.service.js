import axios from "axios";

const messageUrl = "https://graph.facebook.com/v20.0/";

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
    const message = await axios.get(`${messageUrl}${item.id}?fields=id,created_time,from,to,message`, options);
    return message.data;
});

  const results = await Promise.all(messagePromises);
  return results
};
