'use client';

import Card from '../card/Card';
import Stock from '../Stock';

const LowQuantityStock = () => {
  return (
    <Card title="Low Quantity Stock" link table>
      <div className="mt-[13px]">
        <Stock src="TataSalt" name="Tata Salt" stock={10} />
      </div>
      <Stock src="Lays" name="Lays" stock={15} />
      <Stock src="Lays" name="Lays" stock={15} />
    </Card>
  );
};

export default LowQuantityStock;
