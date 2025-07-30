import axios from "axios";

export async function saveToOneDrive(buffer, filename, accessToken) {
  const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/MaintenanceReports/${filename}:/content`;
  const response = await axios.put(uploadUrl, buffer, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/octet-stream",
    },
  });
  return response.data;
}
