import axios from 'axios';
import { domain } from '../index.js';

export async function ACosplayer() {
  try {
    const { data } = await axios.get(`${domain}/api/anime/cosplayer`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
