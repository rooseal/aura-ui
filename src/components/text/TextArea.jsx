import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AnimBar, Container, Textarea, Label } from './styled';

class TextArea extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
    style: PropTypes.object,
    mask: PropTypes.func,
    label: PropTypes.string.isRequired,
    // Passed in by ForwardRef Wrapper
    _ref: PropTypes.object,
  };

  static defaultProps = {
    resize: 'none',
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
    const { name, value, style, label, _ref, resize } = this.props;

    return (
      <Container>
        <AnimBar className={focused ? 'active' : ''} />
        <Label
          htmlFor={name}
          className={!focused && value === '' ? '' : 'active'}
        >
          {label}
        </Label>
        <Textarea
          ref={_ref}
          id={name}
          style={{ ...style, resize }}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <TextArea _ref={ref} {...props} />
));
