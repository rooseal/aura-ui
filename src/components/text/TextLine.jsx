import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './textStyles'

class TextLine extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'password']),
    style: PropTypes.object,
    label: PropTypes.string.isRequired,
    // Passed in by injectSheet Wrapper
    classes: PropTypes.object.isRequired,
    // Passed in by ForwardRef Wrapper
    _ref: PropTypes.object
  }

  static defaultProps = {
    type: 'text'
  }

  state = {
    focused: false
  }

  handleChange = event => {
    const { mask, onChange } = this.props
    let { value } = event.target

    if (mask !== undefined) {
      value = mask(value)
    }

    onChange(value)
  }

  handleFocus = event => {
    this.setState({
      focused: true
    })
  }
    
  handleBlur = event => {
    this.setState({
      focused: false
    })
  }

  render() {
    const { focused } = this.state
    const { name, value, type, style, label, classes: c, _ref } = this.props

    return (
      <div className={c.container}>
        <div className={focused ? c.animBarFocused : c.animBarBlurred}></div>
        <label htmlFor={name} className={!focused && value == '' ? c.labelBlurred : c.labelFocused}>
          {label}
        </label>
        <input 
          ref={_ref}
          id={name}
          name={name} 
          type={type} 
          className={c.input}
          style={style} 
          value={value}
          onFocus={this.handleFocus} 
          onBlur={this.handleBlur} 
          onChange={this.handleChange} 
        /> 
      </div>
    )
  }
}

const StyledComponent = injectSheet(styles)(TextLine)

// We forward the ref to the TextLine using the _ref prop. 
// This is because react-jss doesn't support the forwardRef notation at the moment
export default React.forwardRef((props, ref) => <StyledComponent _ref={ref} {...props} />)
