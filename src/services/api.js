// https://60930f6685ff51001721424f.mockapi.io/musics/

// axios -> É o cliente http para comunicacao entre sistemas

import axios from "axios";

const api = axios.create({
  baseURL: "https://60930f6685ff51001721424f.mockapi.io/musics",
});

export default api;
