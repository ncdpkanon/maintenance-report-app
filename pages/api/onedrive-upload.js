
import formidable from 'formidable';
import { getToken } from 'next-auth/jwt';
import { saveToOneDrive } from '@/lib/onedrive';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const token = await getToken({ req });
  const accessToken = token?.accessToken;

  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized - no accessToken found' });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parse error' });

    const file = files.file;
    const buffer = await fs.promises.readFile(file.filepath);
    const fileName = file.originalFilename;

    const result = await saveToOneDrive(accessToken, fileName, buffer);
    return res.status(200).json({ status: 'success', result });
  });
}
