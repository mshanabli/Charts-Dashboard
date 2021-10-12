import React from 'react';

import { BarChart } from './barChart';
import { LineChart } from './lineChart';
import { PieChart } from './pieChart';

export const Charts = () => (
  <div className="charts">
    <BarChart />
    <LineChart />
    <PieChart />
  </div>
);
