import axios from 'axios';
import { domain } from '../index.js';

export async function AWaifu() {
  try {
    const { data } = await axios.get(`${domain}/api/tools/gempa`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
