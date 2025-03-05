export async function fetchMessagesAPI(token, conversationId) {
    const API_message_URL = `http://localhost:5000/api/v1/messages?conversationId=${conversationId}&createdAt:desc&page=1&size=30`;

    try {
      const response = await fetch(API_message_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const data = await response.json();
      if (data.success) {
        console.log({isback:data});

        return data;
      } else {
        throw new Error("Error fetching users: " + data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
  