import { useState, useEffect, useRef, useMemo, useReducer } from 'react';
import uuid from 'uuid/v1';

// Todo: Make a seperate useKeys hook where it also accepts what element to add the eventlistener to or none to not add the function

// List state
//  active

// List actions
//  setActive

const defaultKeymap = {
  previous: [38], // up
  next: [40], // down
  select: [13], // enter
};

const useList = ({ list = [], keymap: customKeymap = {} }) => {
  // Set the local list state
  const [active, setActive] = useState();

  // An object with the refs of all the items in the list
  // We need the refs here to manage the focus of the active item
  const refs = useRef(new Map());

  const setRef = (id, ref) => {
    if (ref !== refs.current.get(id)) {
      refs.current.set(id, ref);
    }
  };

  // Create a seperate array of ids for the list items. The ids will only change when the list changes.
  const ids = useMemo(() => list.map(() => uuid()), [list]);

  // Create the list of props for the items
  const items = list.map((item, index) => {
    const id = ids[index];

    return {
      item,
      _ref: refs.current.get(item),
      id,
      key: id,
      ref: ref => setRef(id, ref),
      isActive: active === id,
      setActive: () => setActive(id),
    };
  });

  // Focus the html element corresponding to the active item
  useEffect(
    () => {
      // debugger;

      if (active !== undefined) {
        const activeElement = refs.current.get(active);

        if (activeElement !== null && activeElement !== undefined) {
          activeElement.focus();
        }
      }
    },
    // [active],
  );

  // Create the final keymap object based on the keymap prop
  const keymap = useMemo(() => ({ ...defaultKeymap, ...customKeymap }), [
    customKeymap,
  ]);

  // Key Handler for the list with controls for up and down
  function keyHandler(e) {
    console.log('useList Keyhandler');

    /* UP */
    if (keymap.previous.includes(e.keyCode)) {
      // Stop the window from scrolling up when pressing up
      e.preventDefault();

      // Stop any parent element actions from firing when the list is active
      e.stopPropagation();

      const activeIndex = ids.findIndex(current => current === active) || 0;

      if (ids[activeIndex - 1] !== undefined) {
        setActive(ids[activeIndex - 1]);
      } else {
        setActive(ids[0]);
      }
    }

    /* DOWN */
    if (keymap.next.includes(e.keyCode)) {
      // Stop the window from scrolling down when pressing down
      e.preventDefault();

      // Stop any parent element actions from firing when the list is active
      e.stopPropagation();

      const activeIndex = ids.findIndex(current => current === active) || 0;

      if (ids[activeIndex + 1] !== undefined) {
        setActive(ids[activeIndex + 1]);
      } else {
        setActive(ids[list.length - 1]);
      }
    }
  }

  return {
    active,
    setActive,
    items,
    keyHandler,
    keymap,
  };
};

export default useList;
