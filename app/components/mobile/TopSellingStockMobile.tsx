'use client';

const TopSellingStockMobile = () => {
  return (
    <div className="flex flex-col mt-[30px]">
      <h1 className="text-xl font-medium md:text-center md:mt-5">
        Top Selling Stock
      </h1>
      <div className="overflow-x-auto md:flex md:mx-auto">
        <div className="inline-block min-w-full py-2 ">
          <div className="overflow-hidden">
            <table className="text-left text-sm font-light">
              <thead className="border-b border-[#F0F1F3] font-medium text-[#5D6679]">
                <tr>
                  <td className="py-[11px] pr-[100px] md:pr-[200px] whitespace-nowrap">
                    Name
                  </td>
                  <td className="py-[11px] pr-[50px] md:pr-[100px] whitespace-nowrap">
                    Sold Quantity
                  </td>
                  <td className="py-[11px] pr-[50px] md:pr-[100px] whitespace-nowrap">
                    Remaining Quantity
                  </td>
                  <td className="py-[11px]">Price</td>
                </tr>
              </thead>
              <tbody className="text-sm text-[#666666] font-medium">
                <tr className="border-b border-[#F0F1F3]">
                  <td className="whitespace-nowrap py-[22px]">Surf Excel</td>
                  <td className="whitespace-nowrap py-[22px]">30</td>
                  <td className="whitespace-nowrap py-[22px]">12</td>
                  <td className="whitespace-nowrap py-[22px]">100</td>
                </tr>
                <tr className="border-b border-[#F0F1F3]">
                  <td className="whitespace-nowrap py-[22px]">Rin</td>
                  <td className="whitespace-nowrap py-[22px]">21</td>
                  <td className="whitespace-nowrap py-[22px]">15</td>
                  <td className="whitespace-nowrap py-[22px]">207</td>
                </tr>
                <tr className="border-b border-[#F0F1F3]">
                  <td className="whitespace-nowrap py-[22px]">Parle G</td>
                  <td className="whitespace-nowrap py-[22px]">19</td>
                  <td className="whitespace-nowrap py-[22px]">17</td>
                  <td className="whitespace-nowrap py-[22px]">105</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingStockMobile;
