import React from 'react';

interface RowProps {
  children: React.ReactNode;
}

const Row = ({ children }: RowProps): JSX.Element => {
  return <div className="flex flex-row">{children}</div>;
};

export default Row;
