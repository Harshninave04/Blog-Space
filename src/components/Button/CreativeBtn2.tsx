import { ArrowBigRight, ArrowRight } from 'lucide-react';
import React from 'react';

function CreativeBtn2({ arg }: { arg: string }) {
  return (
    <>
      <div className='group relative cursor-pointer flex items-center justify-center h-16 w-40 border bg-white rounded-full overflow-hidden text-black text-lg text-center font-semibold'>
        <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          {arg}
        </span>
        <div className='flex gap-2 text-white bg-[#BF2CA4] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none '>
          <span>{arg}</span>
        </div>
      </div>
    </>
  );
}

export default CreativeBtn2;
