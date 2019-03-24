import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SET_FIELD = Symbol('SET_FIELD');

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const DialogContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryLight};
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  padding: 20px;
  max-height: 80vh;
  display: flex;
  width: 95%;
  max-width: 600px;

  & > div {
    overflow-y: auto;
    padding-right: 10px;
    width: inherit;
  }
`;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

const Dialog = ({ children }) => {
  const [dialogFields, dispatch] = useReducer(reducer, {});

  const setField = (name, value) => {
    dispatch({
      type: SET_FIELD,
      payload: {
        name,
        value,
      },
    });
  };

  return (
    <Overlay>
      <DialogContainer>
        {typeof children === 'function'
          ? children([dialogFields, setField])
          : children}
      </DialogContainer>
    </Overlay>
  );
};

Dialog.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Dialog;
