import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ログイン</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => signIn('google')}
      >
        Googleでログイン
      </button>
    </div>
  );
}
