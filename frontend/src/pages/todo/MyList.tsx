import React from 'react';

type ListProps = {
  list: Array<string>
};

const MyList = ({list}: ListProps) => {
  return <ul>
    {list.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
};
export default MyList;