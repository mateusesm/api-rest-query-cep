import axios from 'axios';

export const axiosData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return -1;
  }
};
