import axios from 'axios';
import { domain } from '../index.js';

export async function Dl_YTS(query) {
  if (!query) throw new Error('Query pencarian diperlukan!');

  try {
    const { data } = await axios.get(`${domain}/api/downloader/yt-search`, {
      params: { q: query }
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
