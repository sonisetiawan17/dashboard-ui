'use client';

import Image from 'next/image';
import CardItem from '../card/CardItem';

interface CardProps {
  title: string;
  link?: boolean;
  button?: boolean;
  src?: string;
  chart?: boolean;
  left?: boolean;
  table?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  link,
  button,
  src,
  chart,
  left,
  table,
  children,
}) => {
  return (
    <div
      className={`pt-[20px] pb-[20px] ${chart ? 'h-[360px]' : 'h-[163px]'} ${
        left ? 'w-full lg:w-[690px]' : 'w-[384px]'
      } ${table && 'h-[306px]'}`}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-medium">{title}</p>
        {button && (
          <div
            className="
              flex 
              flex-row 
              items-center
              border
              border-[#D0D3D9]
              rounded-[4px]
              py-[6px]
              px-[16px]
              mr-[16px]
            "
          >
            <Image
              alt="Logo"
              src={`/icons/${src}.png`}
              width="20"
              height="20"
            />
            <p className="pl-[8px] text-sm text-[#5D6679]">Weekly</p>
          </div>
        )}
        {link && (
          <p className="text-sm text-[#0F50AA] font-medium mr-[20px]">
            See All
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
