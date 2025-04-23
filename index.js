import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pluginsDir = path.join(__dirname, 'plugins');
const nessid = {};

// Baca semua file dari folder plugins
const files = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'));

for (const file of files) {
  const modulePath = path.join(pluginsDir, file);
  const { default: plugin } = await import(`./plugins/${file}`);
  
  // Ambil nama export function dari file
  const name = path.basename(file).replace('.js', '');

  // Simpan ke objek 'nessid' dengan key sesuai nama file
  nessid[name] = plugin;
}

export default nessid;
export const domain = 'https://backend.ness.biz.id';
