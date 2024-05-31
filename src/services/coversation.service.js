import axios from "axios";

const covsersationBaseUrl = "https://graph.facebook.com/v20.0/";

export const fetchConversation = async (token, pageId) => {
  const options = {
    params: {
      access_token: token,
    },
  };

  const response = await axios.get(
    `${covsersationBaseUrl}${pageId}/conversations`,
    options
  );

  const conversations = response?.data?.data;
  return conversations;
};
