import React from 'react';

import TextLine from './text-line';

export class TimePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        value = this.formatValue(value);

        if(this.props.onChange) {
            this.props.onChange(value);
        } else {
            this.setState({
                value
            });
        }
    }   

    formatValue(value) {
        let oldValue = this.props.value || this.state.value;

        if(oldValue >= value) return value;

        if(value.length >= 2) {
            if(value.charAt(2) !== ':') {
                value = [value.slice(0, 2), ':', value.slice(2)].join('');
            }
        }
        return value;
    }

    render() {
        let value = this.props.value || this.state.value;

        return (
            <div className="arui-time-picker">
                <TextLine label={new Date().toISOString().slice(11, 16)} maxLength="5" name="newTimepicker" type="text" value={value} onChange={this.handleChange} />
                <div className="arui-picker-button"><i className="fa fa-clock-o" /></div>
            </div>
        )
    }

}

export default TimePicker;