import { getToken } from "next-auth/jwt";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { saveToOneDrive } from "@/lib/onedrive";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const token = await getToken({ req });
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const form = formidable({ multiples: true, keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parsing error" });

    const file = files?.upload;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    try {
      const filePath = file[0].filepath;
      const fileBuffer = fs.readFileSync(filePath);
      const fileName = path.basename(file[0].originalFilename);
      const result = await saveToOneDrive(fileBuffer, fileName, token.accessToken);
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ error: "Upload failed", details: error.message });
    }
  });
}
