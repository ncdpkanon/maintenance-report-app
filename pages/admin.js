
import React from 'react';

const dummyReports = [
  { id: 1, property: '南与野第2', date: '2025-03-10', supervisor: '田中', abnormal: 'あり' },
  { id: 2, property: '大宮駅前', date: '2025-03-11', supervisor: '佐藤', abnormal: 'なし' },
  { id: 3, property: '浦和中央', date: '2025-03-12', supervisor: '鈴木', abnormal: 'あり' }
];

export default function Admin() {
  const abnormalCount = dummyReports.filter(r => r.abnormal === 'あり').length;

  return (
    <div style={{ padding: 20 }}>
      <h1>管理者画面 - 報告一覧</h1>
      <p>異常件数: {abnormalCount} / 全{dummyReports.length}件</p>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th><th>物件名</th><th>日付</th><th>責任者</th><th>異常</th>
          </tr>
        </thead>
        <tbody>
          {dummyReports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.property}</td>
              <td>{report.date}</td>
              <td>{report.supervisor}</td>
              <td>{report.abnormal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
