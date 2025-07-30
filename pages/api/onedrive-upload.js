import formidable from 'formidable';
import { saveToOneDrive } from '@/lib/onedrive';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).send('Error parsing form');
    try {
      const result = await saveToOneDrive(fields, files);
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
