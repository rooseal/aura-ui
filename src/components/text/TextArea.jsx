import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './textStyles'

class TextArea extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
    style: PropTypes.object,
    label: PropTypes.string.isRequired,
    // Passed in by injectSheet Wrapper
    classes: PropTypes.object.isRequired,
    // Passed in by ForwardRef Wrapper
    _ref: PropTypes.object
  }

  static defaultProps = {
    resize: 'none'
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
    const { name, value, style, label, classes: c, _ref, resize } = this.props

    return (
      <div className={c.container}>
        <div className={focused ? c.animBarFocused : c.animBarBlurred}></div>
        <label htmlFor={name} className={!focused && value == '' ? c.labelBlurred : c.labelFocused}>
          {label}
        </label>
        <textarea 
          ref={_ref} 
          id={this.props.name} 
          className={c.input}
          style={{...this.props.style, resize}} 
          value={value} 
          onFocus={this.handleFocus} 
          onBlur={this.handleBlur} 
          onChange={this.handleChange} 
        /> 
      </div>
    )
  }
}

const StyledComponent = injectSheet(styles)(TextArea)

// We forward the ref to the TextLine using the _ref prop. 
// This is because react-jss doesn't support the forwardRef notation at the moment
export default React.forwardRef((props, ref) => <StyledComponent _ref={ref} {...props} />)
