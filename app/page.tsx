import Image from 'next/image';

import { weekDays } from '@/constants/weekDays';
import DayState from '@/components/DayState';

export default function Home() {
  const duties = {
    'Daily learn programming': {
      '17.05.24': false,
      '18.05.24': true,
      '19.05.24': true,
    },
    'Daily coding': {
      '17.05.24': false,
      '18.05.24': true,
      '19.05.24': true,
    },
    'Daily workout': {
      '17.05.24': false,
      '18.05.24': true,
      '19.05.24': true,
    },
    'Walk 10 thousand steps': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
    'Drink 2 liters of water': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
    'Meditation 30 min': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
    'Sleep at least 8 hours': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
  };

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
        Object.entries(duties).map(([duty]) => (
          <div key={duty} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {duty}
              </span>
              <button>
                <Image
                  src={'/icons/delete.svg'}
                  width={20}
                  height={20}
                  alt="delete"
                />
              </button>
            </div>

            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays?.map((day) => (
                <div key={day} className="flex flex-col">
                  <span className="font-sans text-center text-xs text-white">
                    {day}
                  </span>
                  <DayState day={undefined} />
                </div>
              ))}
            </section>
          </div>
        ))}
    </main>
  );
}
