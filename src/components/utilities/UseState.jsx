import { useState } from 'react';

const UseState = ({ initial, children }) => {
  const [state, setState] = useState(initial);

  return children([state, setState]);
};

export default UseState;
