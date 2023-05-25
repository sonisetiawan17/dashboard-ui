'use client';

import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      className="cursor-pointer mr-[10px]"
      height="56"
      width="56"
      src="/images/avatar.png"
    />
  );
};

export default Avatar;
