import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './storeContext';
import initialState from './initialState';
import defaultRootReducer from './rootReducer';

const Store = ({
  children,
  initialValue = initialState,
  rootReducer = defaultRootReducer,
  projectName = 'GoWithTheFlow',
}) => {
  const [state, dispatch] = useReducer(rootReducer, initialValue(projectName));

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
  initialValue: PropTypes.object.isRequired,
  rootReducer: PropTypes.func.isRequired,
  projectName: PropTypes.string,
};

export default Store;
