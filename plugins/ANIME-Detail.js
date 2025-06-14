import axios from 'axios';
import { domain } from '../index.js';

export async function AWallpaper(q) {
  if (!q) throw new Error('Parameter "q" wajib diisi.');

  try {
    const { data } = await axios.get(`${domain}/api/anime/mal-detail`, {
      params: { q },
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
