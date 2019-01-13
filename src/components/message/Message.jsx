import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import StyledMessage from './styled/StyledMessage';

const CONTAINER_ID = 'aruiMessageContainer';
const CONTAINER_CLASS = 'arui-message-container';
const CONTAINER_PARENT = document.body;

const TRANSITION_TIME = 1000;

const Message = ({ show, hide, timeout = 2000, children }) => {
  // const containerRef = useRef(null);
  const [container, setContainer] = useState(
    document.getElementById(CONTAINER_ID),
  );

  // Used for transitioning the message
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let createdContainer = false;
    let temp;
    // let container = document.getElementById(CONTAINER_ID);

    if (container === null) {
      temp = document.createElement('div');
      temp.id = CONTAINER_ID;
      temp.className = CONTAINER_CLASS;
      temp.style.position = 'fixed';
      temp.style.top = '30px';
      temp.style.right = '20px';
      temp.style.marginBottom = '5px';
      temp.style.display = 'flex';
      temp.style.flexDirection = 'column';
      temp.style.alignItems = 'flex-end';

      // console.log(CONTAINER_PARENT);

      CONTAINER_PARENT.appendChild(temp);

      createdContainer = true;
      setContainer(temp);
    }

    // containerRef.current = container;

    return () => {
      if (createdContainer) {
        temp.parentElement.removeChild(temp);
      }
      // containerRef.current = null;
    };
  }, []);

  useEffect(
    () => {
      if (show) {
        console.log('Activate Message');

        // Wrapper for in animation
        setTimeout(() => {
          // Wrapper for out animation
          hide();
        }, timeout);
      }
    },
    [show],
  );

  // console.log(`Render function of ${children}`, { show }, { container });

  return show
    ? container !== null
      ? createPortal(<StyledMessage>{children}</StyledMessage>, container)
      : null
    : null;
};

export default Message;
