import React from 'react';

interface RowProps {
  children: React.ReactNode;
}

const KeyRow = ({ children }: RowProps): JSX.Element => (
  <div className="flex flex-row">{children}</div>
);

export default KeyRow;
