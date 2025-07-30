'use client';
import { useState } from 'react';

export default function HomeFormPage({ session }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    await fetch('/api/onedrive-upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{session?.user?.email}でログイン中</p>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">アップロード</button>
    </form>
  );
}