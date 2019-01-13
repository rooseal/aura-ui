import React, { cloneElement, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useControlledState from '../../hooks/useControlledState';
import useClickOutside from '../../hooks/useClickOutside';
import useSelectList from '../list/useSelectList';
import Option from './Option';
import * as Styled from './styled';

const EmptyText = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.textLight};
  padding: 10px;
`;

const Select = ({
  value: propValue,
  onChange: setPropValue,
  closeOnSelect,
  list: dataList,
  children,
  Styled: { Container, Header, List },
  ...props
}) => {
  const [selectValue, setSelectValue] = useControlledState(
    propValue,
    setPropValue,
  );
  const [open, setOpen] = useState(false);
  const list = useSelectList({
    value: selectValue,
    onChange: setSelectValue,
    list: dataList || children,
  });

  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useClickOutside(containerRef, () => {
    setOpen(false);
  });

  useEffect(
    () => {
      if (open) {
        if (list.active === undefined) {
          // Todo: There is a bug where if the active item doesn't
          // change, the list doesn't get focus. Because a item gets
          // focus when it is activated. FIX IT.
          list.setActive(list.items[0].key);
        }
      } else {
        headerRef.current.focus();
      }
    },
    [open],
  );

  const handleKeyNavigation = e => {
    /* UP */
    if (list.keymap.previous.includes(e.keyCode)) {
      // debugger;
      let activeIndex = list.items.findIndex(item => item.isActive);

      if (activeIndex === -1) {
        activeIndex = list.items.length - 1;
      }

      console.log({ activeItem: list.items[activeIndex], activeIndex, list });

      if (activeIndex > 0) {
        list.setValue(list.items[activeIndex - 1].value);
        list.setActive(list.items[activeIndex - 1].id);
      }
    }

    /* DOWN */
    if (list.keymap.next.includes(e.keyCode)) {
      // debugger;
      let activeIndex = list.items.findIndex(item => item.isActive);

      if (activeIndex === -1) {
        activeIndex = 0;
      }

      console.log({ activeItem: list.items[activeIndex], activeIndex, list });

      if (activeIndex < list.items.length - 1) {
        list.setValue(list.items[activeIndex + 1].value);

        console.log({ listItem: list.items[activeIndex + 1].item });

        list.setActive(list.items[activeIndex + 1].id);
      }
    }
  };

  const handleListKeys = e => {
    if (open) {
      list.keyHandler(e);
    }

    if (e.keyCode === 13) {
      if (open && closeOnSelect) {
        setOpen(false);
      }
    }

    if (e.keyCode === 9 || e.keyCode === 27) {
      setOpen(false);
      if (headerRef.current !== null) {
        headerRef.current.focus();
      }
    }

    handleKeyNavigation(e);
  };

  const handleHeaderKeys = e => {
    handleKeyNavigation(e);
  };

  const renderChildren = () =>
    React.Children.map(children, (child, i) =>
      cloneElement(child, {
        list,
        ...list.items[i],
        ...child.props,
      }),
    );

  const renderList = () =>
    dataList.map((option, i) => (
      <Option list={list} {...list.items[i]}>
        {typeof option === 'object' ? JSON.stringify(option) : option}
      </Option>
    ));

  return (
    <Container ref={containerRef} {...props}>
      <Header
        onClick={() => setOpen(!open)}
        onKeyDown={handleHeaderKeys}
        open={open}
        ref={headerRef}
      >
        {list.value || 'Please select a value'}
      </Header>
      {open && (
        <Styled.Widget>
          <List role="listbox" onKeyDown={handleListKeys} tabIndex="-1">
            {dataList !== undefined ? renderList() : renderChildren()}
          </List>
        </Styled.Widget>
      )}
    </Container>
  );
};

// API Reminder: You can only have list OR children. If both are provided the children prop will be ignored

Select.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      }),
    ),
  ]),
  closeOnSelect: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]),
  onChange: PropTypes.func,
  Styled: PropTypes.shape({
    Container: PropTypes.any,
    Header: PropTypes.any,
    List: PropTypes.any,
  }),
  value: PropTypes.any,
};

Select.defaultProps = {
  closeOnSelect: true,
  children: <EmptyText>There are no options available</EmptyText>,
  onChange: undefined,
  Styled: {
    Container: Styled.Select,
    Header: Styled.Header,
    List: Styled.List,
  },
  value: '',
};

export default Select;
