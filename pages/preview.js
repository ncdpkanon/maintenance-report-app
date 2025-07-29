import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRouter } from 'next/router';

export default function Preview() {
  const router = useRouter();
  const data = router.query;

  const exportPDF = async () => {
    const element = document.getElementById('preview');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 0);
    pdf.save('report.pdf');
  };

  return (
    <div className="p-6">
      <div id="preview" className="border p-4 mb-4 bg-white">
        <h2 className="text-xl font-bold mb-2">作業報告プレビュー</h2>
        <p>物件名: {data.site}</p>
        <p>点検日: {data.date}</p>
        <p>作業時間: {data.time}</p>
        <p>作業人数: {data.people}</p>
        <p>責任者: {data.manager}</p>
        <p>精算機機種: {data.machine}</p>
        <p>ラック台数: {data.racks}</p>
        <p>異常の有無: {data.abnormal}</p>
        <p>作業内容: {data.content}</p>
      </div>
      <button onClick={exportPDF} className="bg-green-500 text-white px-4 py-2">
        PDF出力
      </button>
    </div>
  );
}
