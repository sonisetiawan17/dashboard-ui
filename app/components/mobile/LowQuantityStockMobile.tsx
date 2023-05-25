'use client';

import Stock from '../Stock';

const LowQuantityStockMobile = () => {
  return (
    <>
      <div className="mt-[13px] md:mt-[20px]">
        <h1 className="text-xl font-medium mb-5 md:text-center">
          Low Quantity Stock
        </h1>
        <Stock src="TataSalt" name="Tata Salt" stock={10} />
      </div>
      <Stock src="Lays" name="Lays" stock={15} />
      <Stock src="Lays" name="Lays" stock={15} />
    </>
  );
};

export default LowQuantityStockMobile;
