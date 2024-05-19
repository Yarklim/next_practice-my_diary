import Image from 'next/image';

export default function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = ['/icons/process.svg', 'process', 20];

  if (day) image = ['/icons/done.svg', 'done', 20];
  if (day === false) image = ['/icons/cross.svg', 'not done', 20];
  const [src, alt, size] = image;

  return (
    <div className="flex items-center justify-center h-9 pt-4">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}
