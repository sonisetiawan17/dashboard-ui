'use client';

import CardItemMobile from './card/CardItemMobile';

const PurchaseOverviewMobile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium md:text-center">Purchase Overview</h1>
      <div className="flex flex-wrap justify-between mt-7 items-end">
        <CardItemMobile src="Purchase" label="Purchase" price="82" />
        <CardItemMobile src="Cost" label="Cost" price="13.573" />
        <CardItemMobile src="Cancel" label="Cancel" price="5" />
        <CardItemMobile src="Return" label="Return" price="17.432" />
      </div>
    </div>
  );
};

export default PurchaseOverviewMobile;
