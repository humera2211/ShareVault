import axios from "axios";

export const SendEmail = (data) => {
  return axios.post("/api/send", data);
};
