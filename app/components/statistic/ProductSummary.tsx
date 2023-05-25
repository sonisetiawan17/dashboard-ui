'use client';

import Card from '../card/Card';
import CardItem from '../card/CardItem';

const ProductSummary = () => {
  return (
    <Card title="Product Summary">
      <div className="flex flex-row gap-[66px]">
        <CardItem
          src="Suppliers"
          price="31"
          label="Number of Suppliers"
          vertical
        />
        <CardItem
          src="Categories"
          price="21"
          label="Number of Categories"
          vertical
        />
      </div>
    </Card>
  );
};

export default ProductSummary;
