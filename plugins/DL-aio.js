import axios from 'axios';
import { domain } from '../index.js';

export default async function TTDl(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get(`${domain}/api/downloader/aio`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
