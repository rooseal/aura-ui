import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import { AnimBar, Container, Input, Label } from './styled';

class TextLine extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    type: PropTypes.oneOf(['text', 'password']),
    style: PropTypes.object,
    mask: PropTypes.func,
    label: PropTypes.string.isRequired,
    // Passed in by ForwardRef Wrapper
    _ref: PropTypes.object,
  };

  static defaultProps = {
    type: 'text',
    value: '',
    onBlur: () => {},
    onFocus: () => {},
  };

  state = {
    focused: false,
    value: '',
  };

  handleChange = event => {
    const { mask, onChange } = this.props;
    let { value } = event.target;

    if (mask !== undefined) {
      value = mask(value);
    }

    if (onChange === undefined) {
      this.setState({
        value,
      });
    } else {
      onChange(value);
    }
  };

  handleFocus = () => {
    const { onFocus } = this.props;

    this.setState({
      focused: true,
    });

    onFocus();
  };

  handleBlur = () => {
    const { onBlur } = this.props;

    this.setState({
      focused: false,
    });

    onBlur();
  };

  render() {
    const { focused, value: stateValue } = this.state;
    const {
      name = uuid(),
      value,
      type,
      style,
      label,
      onChange,
      _ref,
      ...props
    } = this.props;

    return (
      <Container>
        <AnimBar className={focused ? 'active' : ''} />
        <Label htmlFor={name} active={focused || value !== ''}>
          {label}
        </Label>
        <Input
          {...props}
          ref={_ref}
          id={name}
          name={name}
          type={type}
          style={style}
          value={onChange === undefined ? stateValue : value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <TextLine _ref={ref} {...props} />
));
