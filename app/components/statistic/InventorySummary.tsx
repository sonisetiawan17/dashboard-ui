'use client';

import Card from '../card/Card';
import CardItem from '../card/CardItem';

const InventorySummary = () => {
  return (
    <Card title="Inventory Summary">
      <div className="flex flex-row gap-[103px]">
        <CardItem
          src="Quantity"
          price="868"
          label="Quantity in Hand"
          vertical
        />
        <CardItem src="Received" price="200" label="To be Received" vertical />
      </div>
    </Card>
  );
};

export default InventorySummary;
