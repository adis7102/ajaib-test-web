import React from "react";

import './style.scss';

const Dropdown = (props) => {
  const { name, title, onChange, value, children } = props;

  return (
    <div className="dropdown">
      <p className="title">{title}</p>
      <select 
        name={name}
        onChange={(e) => onChange(e?.target?.value)}
        value={value}
      >{children}</select>
    </div>
  );
};

export default Dropdown;
