import { useEffect } from 'react';

const useClickOutside = (element, func) => {
  useEffect(() => {
    function handleClick(e) {
      if (!element.current.contains(e.target) && element !== e.target) {
        if (typeof func === 'function') {
          func();
        } else {
          throw Error(
            `The second argument to useClickOutside must be a function`,
          );
        }
      }
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useClickOutside;
