import React from 'react';

import { BarChart } from './barChart';
import { LineChart } from './lineChart';
import { PieChart } from './pieChart';

export const ChartsList = () => {
  return (
    <div className="charts-list">
      <BarChart />
      <LineChart />
      <PieChart />
    </div>
  );
};
