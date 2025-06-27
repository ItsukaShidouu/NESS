import axios from 'axios';
import { domain } from '../index.js';

export async function TYtsearch() {
  try {
    const { data } = await axios.get(`${domain}/api/tools/yt-search`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
