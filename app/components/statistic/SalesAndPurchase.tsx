'use client';

import Image from 'next/image';
import Card from '../card/Card';
import CardItem from '../card/CardItem';

const SalesAndPurchase = () => {
  return (
    <Card title="Sales & Purchase" left chart button src="Calendar">
      <div className="relative flex flex-col ml-[36px] mr-[34px]">
        <div className="flex flex-row items-center mt-[26px] mb-[22px]">
          <p className="text-sm text-[#667085]">60.000</p>
          <div className="border border-[#D0D3D9] w-full ml-[10px]" />
        </div>
        <div className="flex flex-row items-center mb-[22px]">
          <p className="text-sm text-[#667085]">50.000</p>
          <div className="border border-[#D0D3D9] w-full ml-[10px]" />
        </div>
        <div className="flex flex-row items-center mb-[22px]">
          <p className="text-sm text-[#667085]">40.000</p>
          <div className="border border-[#D0D3D9] w-full ml-[10px]" />
        </div>
        <div className="flex flex-row items-center mb-[22px]">
          <p className="text-sm text-[#667085]">30.000</p>
          <div className="border border-[#D0D3D9] w-full ml-[10px]" />
        </div>
        <div className="flex flex-row items-center mb-[22px]">
          <p className="text-sm text-[#667085]">20.000</p>
          <div className="border border-[#D0D3D9] w-full ml-[10px]" />
        </div>
        <div className="flex flex-row items-center mb-[22px]">
          <p className="text-sm text-[#667085]">10.000</p>
          <div className="border border-[#D0D3D9] w-full ml-[10px]" />
        </div>
        <div className="absolute top-[49px] left-[96px]">
          <Image alt="Chart" src="/icons/Graph.png" width="473" height="198" />
        </div>
      </div>
      <div
        className="
          -mt-[25px]
          ml-[132px] 
          mr-[34px] 
          flex 
          flex-row 
          items-center 
          text-xs 
        text-[#858D9D]
        "
      >
        <p>Jan</p>
        <p className="ml-[30px]">Feb</p>
        <p className="ml-[28px]">Mar</p>
        <p className="ml-[27px]">Apr</p>
        <p className="ml-[27px]">May</p>
        <p className="ml-[24px]">June</p>
        <p className="ml-[24px]">Jul</p>
        <p className="ml-[28px]">Aug</p>
        <p className="ml-[27px]">May</p>
        <p className="ml-[23px]">June</p>
      </div>
      <div className="flex items-center mt-[13px] gap-[23px] ml-[125px]">
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
    </Card>
  );
};

export default SalesAndPurchase;
