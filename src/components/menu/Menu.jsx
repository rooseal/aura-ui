import React, { cloneElement, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import useList from '../list/useList';
import useClickOutside from '../../hooks/useClickOutside';

import * as Styled from './styled';
import ActionItem from './ActionItem';

const Menu = ({ header, children }) => {
  // console.log({ children });

  const [open, setOpen] = useState(false);
  const list = useList({ list: children });
  const headerRef = useRef(null);

  useEffect(
    () => {
      if (!open) {
        headerRef.current.focus();
      } else if (list.items.length > 0) {
        list.setActive(list.items[0].key);
      }
    },
    [open],
  );

  const containerRef = useRef(null);
  useClickOutside(containerRef, () => setOpen(false));

  const renderChildren = () =>
    React.Children.map(children, (child, i) =>
      cloneElement(child, {
        ...list.items[i],
        ...child.props,
      }),
    );

  return (
    <div
      role="menu"
      ref={containerRef}
      tabIndex="-1"
      style={{ position: 'relative' }}
      onKeyDown={e => {
        if (e.key === 'Escape') {
          setOpen(false);
        }

        if (e.key === 'Tab') {
          setOpen(false);
        }
      }}
    >
      {typeof header === 'string' ? (
        <Styled.Header
          ref={headerRef}
          onClick={() => setOpen(!open)}
          open={open}
        >
          {header}
        </Styled.Header>
      ) : (
        React.cloneElement(header, {
          ref: headerRef,
          onClick: () => setOpen(!open),
          open,
        })
      )}
      {open && (
        <Styled.Menu onKeyDown={list.keyHandler}>
          {renderChildren()}
        </Styled.Menu>
      )}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Menu.defaultProps = {};

Menu.preview = {
  children: [
    <ActionItem>Sample 1</ActionItem>,
    <ActionItem>Sample 2</ActionItem>,
    <ActionItem>Sample 3</ActionItem>,
  ],
  header: 'Dropdown Menu',
};

export default Menu;
