'use client';

import Card from '../card/Card';
import CardItem from '../card/CardItem';

const SalesOverview = () => {
  return (
    <Card title="Sales Overview" left>
      <div className="flex flex-wrap lg:flex-row gap-[30px]">
        <CardItem src="Sales" price="832" label="Sales" />
        <CardItem src="Revenue" price="18.300" label="Revenue" />
        <CardItem src="Profit" price="868" label="Profit" />
        <CardItem src="Cost" price="17.432" label="Cost" />
      </div>
    </Card>
  );
};

export default SalesOverview;
