import axios from 'axios';
import { domain } from '../index.js';

export async function A_Wall(q) {
  if (!q) throw new Error('Parameter "q" wajib diisi.');

  try {
    const { data } = await axios.get(`${domain}/api/anime/wall`, {
      params: { q },
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
