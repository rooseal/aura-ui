import React from 'react';

import TextLine from './text-line';
import Calendar from './calendar/calendar';

export class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.arui_id = 'arui-date-picker-' + new Date().getTime();

        this.state = {
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleToggleCalendar = this.handleToggleCalendar.bind(this);
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

    handleToggleCalendar() {
        this.setState({
            open: !this.state.open
        });
    }

    formatValue(value) {
        let oldValue = this.props.value || this.state.value;

        if(oldValue >= value) return value;

        if(value.length >= 4) {
            if(value.charAt(4) !== '-') {
                value = [value.slice(0, 4), '-', value.slice(4)].join('');
            }
            if(value.length >= 7) {
                if(value.charAt(7) !== '-') {
                    value = [value.slice(0, 7), '-', value.slice(7)].join('');
                }
            }
        }
        return value;
    }

    render() {
        let value = this.props.value || this.state.value;

        return (
            <div id={this.arui_id} className="arui-date-picker">
                <TextLine label={new Date().toISOString().slice(0, 10)} maxLength="10" name="newDatepicker" type="text" value={value} onChange={this.handleChange} />
                <div className="arui-picker-button" onClick={this.handleToggleCalendar}><i className="fa fa-calendar" /></div>
                { this.state.open &&
                    <div className="arui-picker-widget">
                        <Calendar value={value} onChange={this.handleChange}/>
                    </div>
                }
            </div>
        )
    }

}

export default DatePicker;