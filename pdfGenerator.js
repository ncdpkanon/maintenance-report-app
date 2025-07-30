
import jsPDF from 'jspdf';

export async function generatePDF(data) {
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text('作業報告書', 10, 10);

  let y = 20;
  Object.entries(data).forEach(([key, value]) => {
    doc.text(`${key}: ${value}`, 10, y);
    y += 10;
  });

  return doc.output('blob');
}
