import formidable from 'formidable';
import fs from 'fs';
import { getToken } from 'next-auth/jwt';
import { saveToOneDrive } from '@/lib/onedrive';

export const config = {
  api: { bodyParser: false }
};

export default async function handler(req, res) {
  const token = await getToken({ req });
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const file = fs.readFileSync(files.file[0].filepath);
    const fileName = files.file[0].originalFilename;
    const result = await saveToOneDrive(token.accessToken, fileName, file);
    res.status(200).json(result);
  });
}