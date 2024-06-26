import { kv } from '@vercel/kv';
import Link from 'next/link';
import Calendar from '@/components/Calendar';

export default async function Duty({
  params: { duty },
}: {
  params: { duty: string };
}) {
  const decodedDuty = decodeURI(duty);
  const dutyTime: Record<string, boolean> | null = await kv.hget(
    'duties',
    decodedDuty
  );

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className=" text-2xl font-light text-center text-white font-display">
        {decodedDuty}
      </h1>
      <Link
        href="/"
        className="flex items-center w-1/5 font-sans text-xs text-white"
      >
        ⬿Back
      </Link>

      <Calendar duty={decodedDuty} dutyTime={dutyTime} />
    </main>
  );
}
