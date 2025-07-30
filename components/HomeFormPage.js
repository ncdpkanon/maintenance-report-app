'use client';
import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function HomeFormPage() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ site: '', content: '', image: null });

  if (status === 'loading') return <p>Loading...</p>;

  if (!session) return (
    <div>
      <p>ログインが必要です</p>
      <button onClick={() => signIn('google')}>Googleでログイン</button>
    </div>
  );

  return (
    <form className="space-y-4">
      <input type="text" name="site" onChange={e => setForm({...form, site: e.target.value})} placeholder="物件名" />
      <textarea name="content" onChange={e => setForm({...form, content: e.target.value})} placeholder="作業内容" />
      <input type="file" name="image" onChange={e => setForm({...form, image: e.target.files[0]})} />
      <button type="submit">保存</button>
    </form>
  );
}
