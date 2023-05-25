'use client';

import Image from 'next/image';

interface CardMobileProps {
  src: string;
  label: string;
  price: string;
  secondary?: boolean;
  third?: boolean;
}

const CardItemMobile: React.FC<CardMobileProps> = ({
  src,
  label,
  price,
  secondary,
  third,
}) => {
  return (
    <div className={`w-[45%] ${third ? 'md:w-[50%]' : 'md:w-[20%]'} py-3`}>
      <div className="flex flex-col gap-5">
        <Image
          alt="Icon"
          src={`/icons/${src}.png`}
          width="30"
          height="30"
          className="flex mx-auto"
        />
        {secondary ? (
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#5D6679] font-semibold text-sm">Rp.{price}</p>
            <p className="text-xs text-[#667085]">{label}</p>
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center">
            <p className="text-[#5D6679] font-semibold text-sm">Rp.{price}</p>
            <p className="text-xs text-[#667085]">{label}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItemMobile;
