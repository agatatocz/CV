import React from "react";

const Tab = ({ tab, active, ...rest }) => {
  const className = active ? "nav-item nav-link active" : "nav-item nav-link";
  return (
    <li className={className} {...rest}>
      {tab}
    </li>
  );
};

export default Tab;
