import React from 'react';

export const Select = props => {
  const { name, label, value, items, ...rest } = props;

  return (
    <div className="form-select">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} {...rest}>
        {items.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
