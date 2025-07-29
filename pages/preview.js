import { useRouter } from 'next/router';

export default function Preview() {
  const router = useRouter();
  const data = router.query;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">プレビュー</h1>
      <pre className="mt-4 bg-gray-100 p-4">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
