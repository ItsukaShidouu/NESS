import axios from 'axios';
import { domain } from '../index.js';

export async function WaifuANIME() {
  try {
    const { data } = await axios.get(`${domain}/api/anime/waifu`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
