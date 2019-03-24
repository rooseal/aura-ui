import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AnimBar, Container, Input, Label } from './styled';

class TextLine extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'password']),
    style: PropTypes.object,
    mask: PropTypes.func,
    label: PropTypes.string.isRequired,
    // Passed in by ForwardRef Wrapper
    _ref: PropTypes.object,
  };

  static defaultProps = {
    type: 'text',
  };

  state = {
    focused: false,
  };

  handleChange = event => {
    const { mask, onChange } = this.props;
    let { value } = event.target;

    if (mask !== undefined) {
      value = mask(value);
    }

    onChange(value);
  };

  handleFocus = () => {
    this.setState({
      focused: true,
    });
  };

  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };

  render() {
    const { focused } = this.state;
    const { name, value, type, style, label, _ref } = this.props;

    return (
      <Container>
        <AnimBar className={focused ? 'active' : ''} />
        <Label
          htmlFor={name}
          className={!focused && value === '' ? '' : 'active'}
        >
          {label}
          <Input
            ref={_ref}
            id={name}
            name={name}
            type={type}
            style={style}
            value={value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </Label>
      </Container>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <TextLine _ref={ref} {...props} />
));
