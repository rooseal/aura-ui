import React, { cloneElement, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useList from './useList';
import useClickOutside from '../../hooks/useClickOutside';

const Styled = {
  List: styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
  `,
};

const List = props => {
  const { list: inputList, onChange, value, transform } = props;
  const list = useList({ list: inputList });

  console.log({ list });
  console.log({ inputList });

  return (
    <div role="menu" tabIndex="-1">
      <Styled.List onKeyDown={list.keyHandler}>
        {list.items.map(transform)}
      </Styled.List>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  transform: PropTypes.func.isRequired,
};

List.defaultProps = {};

export default List;
