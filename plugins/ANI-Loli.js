import axios from 'axios';
import { domain } from '../index.js';

export async function A_Loli() {
  try {
    const { data } = await axios.get(`${domain}/api/anime/loli`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
