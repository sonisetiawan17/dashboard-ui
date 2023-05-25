'use client';

import Image from 'next/image';

const OrderSummaryMobile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium md:text-center">Order Summary</h1>
      <Image
        alt="Chart"
        src="/icons/Chart2.png"
        width="325"
        height="226"
        className="mt-5 flex mx-auto h-[160px]"
      />
      <div className="flex items-center mt-[13px] gap-[23px] justify-center">
        <div className="flex items-center">
          <Image alt="Icon" src="/icons/Ordered.png" width="15" height="15" />
          <p className="text-xs text-[#667085] ml-[8px]">Ordered</p>
        </div>
        <div className="flex items-center">
          <Image alt="Icon" src="/icons/Delivered.png" width="15" height="15" />
          <p className="text-xs text-[#667085] ml-[8px]">Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryMobile;
