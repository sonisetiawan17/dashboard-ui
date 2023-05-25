'use client';

import Card from '../card/Card';
import CardItem from '../card/CardItem';

const PurchaseOverview = () => {
  return (
    <Card title="Purchase Overview" left>
      <div className="flex flex-row gap-[30px]">
        <CardItem src="Purchase" price="82" label="Purchase" />
        <CardItem src="Cost" price="13.573" label="Cost" />
        <CardItem src="Cancel" price="5" label="Cancel" />
        <CardItem src="Return" price="17.432" label="Return" />
      </div>
    </Card>
  );
};

export default PurchaseOverview;
