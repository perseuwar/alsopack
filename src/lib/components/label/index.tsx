import React from 'react';

interface Props {
  children: React.ReactChild;
}

const Label: React.FC<Props> = ({ children }: Props) => (
  <label htmlFor="any" style={{ color: '#676767' }}>
    {children}
  </label>
);

export default Label;
