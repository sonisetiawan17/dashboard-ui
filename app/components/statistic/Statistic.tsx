'use client';

import InventorySummaryMobile from '../mobile/InventorySummaryMobile';
import LowQuantityStockMobile from '../mobile/LowQuantityStockMobile';
import OrderSummaryMobile from '../mobile/OrderSummaryMobile';
import ProductSummaryMobile from '../mobile/ProductSummaryMobile';
import PurchaseOverviewMobile from '../mobile/PurchaseOverviewMobile';
import SalesAndPurchaseMobile from '../mobile/SalesAndPurchaseMobile';
import SalesOverviewMobile from '../mobile/SalesOverviewMobile';
import TopSellingStockMobile from '../mobile/TopSellingStockMobile';
import InventorySummary from './InventorySummary';
import LowQuantityStock from './LowQuantityStock';
import OrderSummary from './OrderSummary';
import ProductSummary from './ProductSummary';
import PurchaseOverview from './PurchaseOverview';
import SalesAndPurchase from './SalesAndPurchase';
import SalesOverview from './SalesOverview';
import TopSellingStock from './TopSellingStock';

const Statistic = () => {
  return (
    <div
      className="
        lg:my-[39px]
        lg:ml-[20px]
        lg:mr-[70px]
        bg-white
        lg:grid
        lg:grid-cols-[690px_384px]
        lg:gap-[20px]
        h-full
      "
    >
      <div className="hidden lg:flex lg:flex-col gap-[20px]">
        <SalesOverview />
        <PurchaseOverview />
        <SalesAndPurchase />
        <TopSellingStock />
      </div>
      <div className="hidden lg:flex flex-col gap-[20px]">
        <InventorySummary />
        <ProductSummary />
        <OrderSummary />
        <LowQuantityStock />
      </div>
      <div className="mt-5 px-4 lg:hidden">
        <SalesOverviewMobile />
        <PurchaseOverviewMobile />
        <div className="md:grid md:grid-cols-2">
          <InventorySummaryMobile />
          <ProductSummaryMobile />
        </div>
        <div className="md:grid md:grid-cols-2">
          <SalesAndPurchaseMobile />
          <OrderSummaryMobile />
        </div>
        <TopSellingStockMobile />
        <LowQuantityStockMobile />
      </div>
    </div>
  );
};

export default Statistic;
