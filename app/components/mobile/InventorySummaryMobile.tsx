'use client';

import CardItemMobile from './card/CardItemMobile';

const InventorySummaryMobile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium md:text-center">Inventory Summary</h1>
      <div className="flex flex-wrap justify-between md:justify-center mt-7 items-end">
        <CardItemMobile
          src="Quantity"
          label="Quantity in Hand"
          price="868"
          secondary
          third
        />
        <CardItemMobile
          src="Received"
          label="To be Received"
          price="21"
          secondary
          third
        />
      </div>
    </div>
  );
};

export default InventorySummaryMobile;
