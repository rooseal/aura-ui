import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextLine from '../text/TextLine';
import { Button } from '../button';
// import Calendar from '../calendar/calendar';

function formatValue(value) {
  const oldValue = this.props.value || this.state.value;

  if (oldValue >= value) return value;

  if (value.length >= 4) {
    if (value.charAt(4) !== '-') {
      value = [value.slice(0, 4), '-', value.slice(4)].join('');
    }
    if (value.length >= 7) {
      if (value.charAt(7) !== '-') {
        value = [value.slice(0, 7), '-', value.slice(7)].join('');
      }
    }
  }
  return value;
}

const Datepicker = ({ ...props }) => {
  const [value, setValue] = useState();
  const [show, setShow] = useState();

  return (
    <div>
      {/* Add DatepickerContainer SC */}
      <TextLine
        label={new Date().toISOString().slice(0, 10)}
        maxLength="10"
        name="newDatepicker"
        type="text"
        value={value}
        onChange={setValue}
      />
      <Button onClick={() => setShow(!show)}>
        {/* Add SVG Icon Component */}
      </Button>
      {show && (
        <div>
          {/* Add Widget SC */}
          {/* <Calendar value={value} onChange={setValue} /> */}
        </div>
      )}
    </div>
  );
};

Datepicker.propTypes = {};

Datepicker.defaultProps = {};

export default Datepicker;
