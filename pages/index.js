
import React, { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    property: '',
    date: '',
    time: '',
    members: 1,
    supervisor: '',
    machines: '',
    racks: '',
    abnormalities: 'None',
    workDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>作業報告フォーム</h1>
      <form onSubmit={handleSubmit}>
        <label>物件名: <input name="property" value={form.property} onChange={handleChange} /></label><br />
        <label>点検日: <input type="date" name="date" value={form.date} onChange={handleChange} /></label><br />
        <label>作業時間: <input name="time" value={form.time} onChange={handleChange} /></label><br />
        <label>作業人数: <input type="number" name="members" value={form.members} onChange={handleChange} /></label><br />
        <label>責任者: <input name="supervisor" value={form.supervisor} onChange={handleChange} /></label><br />
        <label>精算機機種: <input name="machines" value={form.machines} onChange={handleChange} /></label><br />
        <label>ラック台数: <input name="racks" value={form.racks} onChange={handleChange} /></label><br />
        <label>異常の有無:
          <select name="abnormalities" value={form.abnormalities} onChange={handleChange}>
            <option value="None">なし</option>
            <option value="あり">あり</option>
          </select>
        </label><br />
        <label>作業内容:<br />
          <textarea name="workDetails" value={form.workDetails} onChange={handleChange} rows="4" cols="50" />
        </label><br />
        <button type="submit">保存</button>
      </form>
    </div>
  );
}
