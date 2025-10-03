import axios from 'axios';
import { domain } from '../index.js';

export async function Dl_SPOTIFY(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get(`${domain}/api/downloader/spotify`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
