'use client';
import { deleteDuty } from '../actions/dutyActions';
import Image from 'next/image';

export default function DeleteButton({ duty }: { duty: string }) {
  return (
    <button onClick={() => deleteDuty(duty)}>
      <Image src={'/icons/delete.svg'} width={20} height={20} alt="delete" />
    </button>
  );
}
