import { kv } from '@vercel/kv';
import Image from 'next/image';
import Link from 'next/link';

import { weekDays } from '@/constants/weekDays';
import DayState from '@/components/DayState';
import DeleteButton from '@/components/DeleteButton';

type DutySchedule = { [duty: string]: Record<string, boolean> } | null;

export default async function Home() {
  const duties: DutySchedule = (await kv.hgetall('duties')) as DutySchedule;

  const today = new Date();
  const todayWeekDay = today.getDay();
  const sortedWeekDays = weekDays
    .slice(todayWeekDay)
    .concat(weekDays.slice(0, todayWeekDay));
  const last7Days = weekDays
    .map((_, idx) => {
      const date = new Date();
      date.setDate(date.getDate() - idx);

      return date.toISOString().slice(0, 10);
    })
    .reverse();

  return (
    <main className="container relative flex flex-col gap-8 px-10 pt-12">
      {!duties ||
        (!Object.keys(duties).length && (
          <h1 className="mt-10 text-4xl font-light text-white font-display text-center">
            You have no registered duty
          </h1>
        ))}
      {duties &&
        Object.entries(duties).map(([duty, dutyTime]) => (
          <div key={duty} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {duty}
              </span>
              <DeleteButton duty={duty} />
            </div>
            <Link href={`duty/${duty}`}>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {sortedWeekDays?.map((day, idx) => (
                  <div key={day} className="flex flex-col">
                    <span className="font-sans text-center text-xs text-white">
                      {day}
                    </span>
                    <DayState day={dutyTime[last7Days[idx]]} />
                  </div>
                ))}
              </section>
            </Link>
          </div>
        ))}
      <Link
        href="new-duty"
        className="text-center w-2/3 mt-8 mx-auto text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl rounded-md"
      >
        Add new duty
      </Link>
    </main>
  );
}
