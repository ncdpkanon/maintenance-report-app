
import * as XLSX from 'xlsx';

export async function generateExcel(data) {
  const worksheet = XLSX.utils.json_to_sheet([data]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  const wbout = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
  return new Blob([wbout], { type: 'application/octet-stream' });
}
