import React from 'react';

export class TextLine extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            focused: false
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        
    }

    componentDidMount() {
        if(this.props.focus) {
            this.field.focus();
        }
    }

    handleChangeValue(event) {
        if(this.props.onChange) {
            this.props.onChange(event.target.value);
        } else {
            this.setState({
                value: event.target.value
            });
        }
    }

    handleFocus(event) {
        this.setState({
            focused: true
        });
    }
    
    handleBlur(event) {
        this.setState({
            focused: false
        });
    }

    render() {
        let value = this.props.value !== undefined ? this.props.value : this.state.value;

        return (
            <div className="arui-text">
                <div className={this.state.focused ? "arui-text-anim-bar--focus" : "arui-text-anim-bar--blur"}></div>
                <label htmlFor={this.props.name} className={!this.state.focused && value == '' ? "arui-text-label--blur" : "arui-text-label--focus"}>
                    {this.props.label}
                </label>
                { (this.props.type === 'text' || this.props.type === undefined) && 
                    <input 
                        ref={i => this.field = i} 
                        id={this.props.name} 
                        type='text' 
                        className="arui-text-input" 
                        style={this.props.style} 
                        value={value} 
                        maxLength={this.props.maxLength} 
                        onFocus={this.handleFocus} 
                        onBlur={this.handleBlur} 
                        onChange={this.handleChangeValue} 
                    /> 
                }
                { this.props.type === 'multi' && 
                    <textarea 
                        ref={i => this.field = i} 
                        id={this.props.name} 
                        className="arui-text-input" 
                        style={this.props.style} 
                        value={value} 
                        maxLength={this.props.maxLength} 
                        onFocus={this.handleFocus} 
                        onBlur={this.handleBlur} 
                        onChange={this.handleChangeValue} 
                    /> 
                }
                { this.props.type === 'password' && 
                    <input 
                        ref={i => this.field = i} 
                        id={this.props.name} 
                        type='password' 
                        className="arui-text-input" 
                        style={this.props.style} 
                        value={value} 
                        maxLength={this.props.maxLength} 
                        onFocus={this.handleFocus} 
                        onBlur={this.handleBlur} 
                        onChange={this.handleChangeValue} 
                    /> 
                }
            </div>
        )
    }

}

export default TextLine;