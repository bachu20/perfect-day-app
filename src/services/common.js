import axios from "axios";

const baseQuery = ({ baseUrl } = { baseUrl: "" }) => {
  return async (request, api) => {
    const {
      url = request,
      method = "GET",
      data,
      params,
    } = typeof request === "object" ? request : {};

    const headers = { "Content-Type": "application/json" };

    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });

      return { data: result.data };
    } catch (error) {
      error = {
        status: error.response?.status,
        data: error.response?.data || error.message,
      };

      console.log("error:", error);

      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
};

export { baseQuery };
