import React, { useState } from 'react';

import { Navbar } from './components/navbar';
import { ChartsForm } from './components/chartsForm';
import { ChartsList } from './components/chartsList';

export const App = () => {
  const [state, setState] = useState({
    charts: [],
    orderBy: 'name',
    display: 'all',
  });

  const { charts, orderBy, display } = state;

  const handleChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleRefresh = e => {
    e.preventDefault();

    console.log('refresh');
  };

  return (
    <>
      <Navbar />
      <ChartsForm
        orderBy={orderBy}
        display={display}
        handleChange={handleChange}
        handleRefresh={handleRefresh}
      />
      <ChartsList />
    </>
  );
};
