import { useEffect, useMemo } from 'react';

import useList from './useList';
import useControlledState from '../../hooks/useControlledState';

const defaultKeymap = {
  select: [13], // enter
};

const useSelectList = ({ value: propValue, onChange, ...rest }) => {
  // Create the final keymap object based on the keymap prop
  const keymap = useMemo(() => ({ ...defaultKeymap, ...rest.customKeymap }), [
    rest.customKeymap,
  ]);

  const [value, setValue] = useControlledState(propValue, onChange);
  const list = useList({ ...rest, keymap });

  list.items = list.items.map(currentItem => {
    const { item } = currentItem;
    const currentValue =
      typeof item === 'string'
        ? item
        : item.props !== undefined
        ? item.props.value !== undefined
          ? item.props.value
          : item.props.children
        : item;

    return {
      ...currentItem,
      value: currentValue,
      isSelected: currentValue === value,
    };
  });

  function keyHandler(e) {
    list.keyHandler(e);

    /* ENTER */
    if (list.keymap.select.includes(e.keyCode)) {
      e.preventDefault();

      const currentActive = list.items.find(
        current => current.id === list.active,
      );

      setValue(currentActive.value);
    }
  }

  // useEffect(() => {
  //   window.addEventListener('keydown', keyHandler);

  //   return () => {
  //     window.removeEventListener('keydown', keyHandler);
  //   };
  // });

  return {
    ...list,
    keyHandler,
    value,
    setValue,
  };
};

export default useSelectList;
