import React, { useState, useEffect } from 'react';

import { Navbar } from './components/navbar';
import { Loading } from './components/shared/loading';
import { ChartsForm } from './components/chartsForm';
import { ChartsList } from './components/chartsList';
import { getTypes, getCharts } from './services/charts';

export const App = () => {
  const [state, setState] = useState({
    loading: true,
    toggleRefresh: true,
    charts: [],
    types: [],
    type: 'table',
    count: '',
  });

  const { loading, toggleRefresh, charts, types, type, count } = state;

  const handleChange = e => {
    const { name, value } = e.target;

    setState({ ...state, loading: true, [name]: value });
  };

  const handleRefresh = e => {
    e.preventDefault();

    setState({ ...state, loading: true, toggleRefresh: !toggleRefresh });
  };

  useEffect(() => {
    (async () => {
      const types = await getTypes();
      const charts = await getCharts(type, count);

      setState({
        ...state,
        loading: false,
        types,
        charts,
      });
    })();
  }, []);

  useEffect(() => {
    types.length &&
      (async () => {
        const charts = await getCharts(type, count);

        setState({ ...state, loading: false, charts });
      })();
  }, [toggleRefresh, type, count]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <ChartsForm
            types={types}
            type={type}
            count={count}
            handleChange={handleChange}
            handleRefresh={handleRefresh}
          />
          <ChartsList type={type} charts={charts} />
        </>
      )}
    </>
  );
};
