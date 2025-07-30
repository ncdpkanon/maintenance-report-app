
import axios from 'axios';

export async function saveToOneDrive(accessToken, fileName, fileBuffer) {
  const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/apps/maintenance/${fileName}:/content`;

  const response = await axios.put(uploadUrl, fileBuffer, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/octet-stream',
    },
  });

  return response.data;
}
