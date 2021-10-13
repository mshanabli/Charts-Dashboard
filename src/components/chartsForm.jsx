import React from 'react';
import { Select } from './shared/select';

export const ChartsForm = props => {
  const { types, type, count, handleChange, handleRefresh } = props;

  return (
    <form className="charts-form" onSubmit={handleRefresh}>
      <Select
        name="type"
        label="Chart Type"
        items={types}
        value={type}
        indexed={true}
        onChange={handleChange}
      />
      <Select
        name="count"
        label="Display"
        attributes={{
          key: 'name',
          value: 'value',
          label: 'name',
        }}
        items={[
          { name: 'all', value: '' },
          { name: 'Top 5', value: 5 },
          { name: 'Top 10', value: 10 },
        ]}
        value={count}
        onChange={handleChange}
      />
      <button type="submit" className="form-submit">
        Refresh
      </button>
    </form>
  );
};
