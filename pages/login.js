import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-4">ログイン画面</h1>
      <button onClick={() => signIn()} className="bg-blue-600 text-white px-4 py-2 rounded">
        Googleでログイン
      </button>
    </div>
  );
}
