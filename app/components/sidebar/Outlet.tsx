'use client';

import Image from 'next/image';

const Outlet = () => {
  return (
    <div className="flex flex-row items-center justify-between mb-[40px] ml-[83px] mr-[24px]">
      <div className="flex flex-row items-center gap-[17px]">
        <Image alt="Logo" src="/icons/Icon.png" width="50" height="50" />
        <div className="flex flex-col text-white ">
          <p className="text-xs">Outlet</p>
          <div className="flex flex-row gap-[10px] items-center">
            <p className="text-sm">Semua outlet</p>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="14"
              height="14"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-[4px] rounded-full ">
        <Image alt="Icon" src="/icons/menu.png" width="16" height="16" />
      </div>
    </div>
  );
};

export default Outlet;
