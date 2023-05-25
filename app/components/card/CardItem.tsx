'use client';

import Image from 'next/image';

interface CardItemProps {
  src: string;
  price: string;
  label: string;
  vertical?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ src, price, label, vertical }) => {
  return (
    <>
      {vertical ? (
        <div className="w-fit flex lg:flex-col lg:justify-between">
          <Image
            alt="Icon"
            src={`/icons/${src}.png`}
            width="25"
            height="25"
            className="pt-[22px] pb-[11px] flex mx-auto"
          />
          <div className="flex flex-col items-center gap-[2px]">
            <p className="text-[#5D6679] font-semibold text-base">Rp.{price}</p>
            <p className="text-sm text-[#667085]">{label}</p>
          </div>
        </div>
      ) : (
        <div className="w-fit flex flex-col justify-between">
          <Image
            alt="Icon"
            src={`/icons/${src}.png`}
            width="30"
            height="25"
            className="pt-[22px] pb-[14px] flex mx-auto"
          />
          <div className="flex flex-row items-center gap-[32px]">
            <p className="text-[#5D6679] font-semibold text-base">Rp.{price}</p>
            <p className="text-sm text-[#667085]">{label}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardItem;
