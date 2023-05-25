'use client';

import CardItemMobile from './card/CardItemMobile';

const SalesOverviewMobile = () => {
  return (
    <div>
      <h1 className="text-xl font-medium md:text-center">Sales Overview</h1>
      <div className="flex flex-wrap justify-between mt-7 items-end">
        <CardItemMobile src="Sales" label="Sales" price="832" />
        <CardItemMobile src="Revenue" label="Revenue" price="18.300" />
        <CardItemMobile src="Profit" label="Profit" price="836" />
        <CardItemMobile src="Cost" label="Cost" price="17.432" />
      </div>
    </div>
  );
};

export default SalesOverviewMobile;
