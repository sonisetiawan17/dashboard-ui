'use client';

import Image from 'next/image';

interface StockProps {
  src: string;
  name: string;
  stock: number;
}

const Stock: React.FC<StockProps> = ({ src, name, stock }) => {
  return (
    <div className="flex flex-row gap-[26px] items-center mb-[16px] ">
      <Image alt="Stock" src={`/icons/${src}.png`} width="60" height="70" />
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-base text-[#383E49]">{name}</p>
        <p className="font-normal text-xs lg:text-sm text-[#667085] mt-[4px]">
          Remaining Quantity : {stock} Packet
        </p>
      </div>
      <div
        className="
            relative 
            font-medium 
            text-xs 
            text-[#AA3028] 
            bg-[#FEECEB] 
            h-[22px] 
            w-[38px] 
            text-center 
            rounded-[16px]
          "
      >
        <p
          className="
             absolute 
             top-1/2 
             left-1/2 
             transform 
             -translate-x-1/2 
             -translate-y-1/2
            "
        >
          Low
        </p>
      </div>
    </div>
  );
};

export default Stock;
