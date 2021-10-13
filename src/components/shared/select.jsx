import React from 'react';

export const Select = props => {
  const { name, label, items, attributes: attrs, indexed, ...rest } = props;

  return (
    <div className="form-select">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        {items.map((item, idx) =>
          indexed ? (
            <option key={idx} value={item}>
              {item}
            </option>
          ) : (
            <option key={item[attrs.key]} value={item[attrs.value]}>
              {item[attrs.label]}
            </option>
          )
        )}
      </select>
    </div>
  );
};
