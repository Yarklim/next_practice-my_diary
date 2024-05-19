import Image from 'next/image';

export default function Home() {
  const duties = {
    'daily learn programming': {
      '17.05.24': false,
      '18.05.24': true,
      '19.05.24': true,
    },
    'daily coding': {
      '17.05.24': false,
      '18.05.24': true,
      '19.05.24': true,
    },
    'daily workout': {
      '17.05.24': false,
      '18.05.24': true,
      '19.05.24': true,
    },
    'walk 10 thousand steps': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
    'drink 2 liters of water': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
    'meditation 30 min': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
    'sleep at least 8 hours': {
      '17.05.24': true,
      '18.05.24': true,
      '19.05.24': true,
    },
  };

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-5">
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
          </div>
        ))}
    </main>
  );
}
