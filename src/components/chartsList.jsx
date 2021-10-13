import React from 'react';

import { TableChart } from './tableChart';
import { BarChart } from './barChart';
import { LineChart } from './lineChart';
import { PieChart } from './pieChart';

export const ChartsList = props => {
  const { type, charts } = props;

  return (
    <div className="charts-list">
      {type === 'table' && charts.map(chart => <TableChart key={chart.id} chart={chart} />)}
      {type === 'bar' && charts.map(chart => <BarChart key={chart.id} chart={chart} />)}
      {type === 'line' && charts.map(chart => <LineChart key={chart.id} chart={chart} />)}
      {type === 'pie' && charts.map(chart => <PieChart key={chart.id} chart={chart} />)}
    </div>
  );
};
