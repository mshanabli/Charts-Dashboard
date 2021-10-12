import React from 'react';
import { Select } from './shared/select';

export const ChartsForm = props => {
  const { orderBy, display, handleChange, handleRefresh } = props;

  return (
    <form className="charts-form" onSubmit={handleRefresh}>
      <Select
        name="orderBy"
        label="Order By"
        items={['name', 'type']}
        value={orderBy}
        onChange={handleChange}
      />
      <Select
        name="display"
        label="Display"
        items={['all', 'top 5', 'top 10']}
        value={display}
        onChange={handleChange}
      />
      <button type="submit" className="form-submit">
        Refresh
      </button>
    </form>
  );
};
