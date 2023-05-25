'use client';

import Image from 'next/image';
import Card from '../card/Card';

const SalesAndPurchaseMobile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium md:text-center">Sales & Purchase</h1>
      <Image
        alt="Chart"
        src="/icons/Chart.png"
        width="400"
        height="400"
        className="mt-5 md:w-full"
      />
      <div className="flex items-center mt-[13px] gap-[23px] justify-center">
        <div className="flex items-center">
          <Image
            alt="Icon"
            src="/icons/PurchaseIcon.png"
            width="15"
            height="15"
          />
          <p className="text-xs text-[#667085] ml-[8px]">Purchase</p>
        </div>
        <div className="flex items-center">
          <Image alt="Icon" src="/icons/SalesIcon.png" width="15" height="15" />
          <p className="text-xs text-[#667085] ml-[8px]">Sales</p>
        </div>
      </div>
    </div>
  );
};

export default SalesAndPurchaseMobile;
