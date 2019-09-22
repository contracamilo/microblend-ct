import React from 'react';

const Title = ({
  h1, h2, h3, h4, h5, children
}) => {
  if (h1) { return <h1>{children}</h1>; }
  if (h2) { return <h2>{children}</h2>; }
  if (h3) { return <h3>{children}</h3>; }
  if (h4) { return <h4>{children}</h4>; }
  if (h5) { return <h5>{children}</h5>; }
  return <strong>{children}</strong>;
};

export default Title;
