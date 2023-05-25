'use client';

import CardItemMobile from './card/CardItemMobile';

const ProductSummaryMobile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium md:text-center">Product Summary</h1>
      <div className="flex flex-wrap justify-between md:justify-center mt-7 items-end">
        <CardItemMobile
          src="Suppliers"
          label="Number of Suppliers"
          price="31"
          secondary
          third
        />
        <CardItemMobile
          src="Categories"
          label="Number of Categories"
          price="21"
          secondary
          third
        />
      </div>
    </div>
  );
};

export default ProductSummaryMobile;
