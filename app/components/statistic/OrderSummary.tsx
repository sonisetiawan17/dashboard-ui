'use client';

import Image from 'next/image';
import Card from '../card/Card';
import CardItem from '../card/CardItem';

const OrderSummary = () => {
  return (
    <Card title="Order Summary" chart>
      <div className="mt-[25px] ml-[34px] relative">
        <Image alt="Chart" src="/icons/Data.png" width="325" height="226" />
        <div className="flex flex-col gap-[30px] items-end absolute top-[37px] -left-[35px] text-xs text-[#858D9D]">
          <p>4000</p>
          <p>3000</p>
          <p>2000</p>
          <p>1000</p>
          <p>0</p>
        </div>
      </div>
      <div className="flex flex-row text-xs text-[#858D9D] gap-12 mt-3 ml-[38px]">
        <p>Jan</p>
        <p>Feb</p>
        <p>Mar</p>
        <p>Apr</p>
        <p>May</p>
      </div>
      <div className="flex items-center mt-[13px] gap-[23px] ml-[105px]">
        <div className="flex items-center">
          <Image alt="Icon" src="/icons/Ordered.png" width="15" height="15" />
          <p className="text-xs text-[#667085] ml-[8px]">Ordered</p>
        </div>
        <div className="flex items-center">
          <Image alt="Icon" src="/icons/Delivered.png" width="15" height="15" />
          <p className="text-xs text-[#667085] ml-[8px]">Delivered</p>
        </div>
      </div>
    </Card>
  );
};

export default OrderSummary;
