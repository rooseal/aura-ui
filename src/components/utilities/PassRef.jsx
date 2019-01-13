import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const PassRef = ({ pass, children, ...props }) => {
  const _ref = useRef(null);

  useEffect(
    () => {
      pass(_ref);
    },
    [_ref],
  );

  return children({ _ref, parentProps: props });
};

PassRef.propTypes = {
  pass: PropTypes.func.isRequired, // Function from parent to accept the ref
  children: PropTypes.func.isRequired, // Function which gets the ref as _ref to use as normal
};

export default PassRef;
