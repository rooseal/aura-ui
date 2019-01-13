import { useState } from 'react';

const useControlledState = (controlledState, controlledSetState) => {
  const [state, setState] = useState(controlledState || '');

  if (typeof controlledSetState === 'function') {
    return [controlledState, controlledSetState];
  }

  return [state, setState];
};

export default useControlledState;
