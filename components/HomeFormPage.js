// components/HomeFormPage.js

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function HomeFormPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    site: '',
    date: '',
    time: '',
    people: '',
    manager: '',
    machine: '',
    racks: '',
    abnormal: 'あり',
    content: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!session) {
      alert('ログインが必要です。ログイン後に再度お試しください。');
      signIn();
      return;
    }

    alert('保存処理をスキップしてプレビュー画面へ遷移します。');
    router.push({ pathname: '/preview', query: form });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">作業報告フォーム</h1>
      {['site', 'date', 'time', 'people', 'manager', 'machine', 'racks'].map((field, idx) => (
        <div key={idx}>
          <label>{
            {
              site: '物件名',
              date: '点検日',
              time: '作業時間',
              people: '作業人数',
              manager: '責任者',
              machine: '精算機機種',
              racks: 'ラック台数'
            }[field]
          }</label>
          <input type="text" name={field} className="border w-full" onChange={handleChange} />
        </div>
      ))}
      <div>
        <label>異常の有無:</label>
        <select name="abnormal" className="border w-full" onChange={handleChange}>
          <option value="あり">あり</option>
          <option value="なし">なし</option>
        </select>
      </div>
      <div>
        <label>作業内容:</label>
        <textarea name="content" className="border w-full" rows={4} onChange={handleChange} />
      </div>
      <div>
        <label>作業画像のアップロード:</label>
        <input type="file" name="image" accept="image/*" className="border w-full" onChange={handleChange} />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleSubmit}>
        保存 & プレビュー
      </button>
    </div>
  );
}
