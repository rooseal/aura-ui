import React from 'react';

import CalendarViewDays from './calendar-view-days';
import CalendarViewMonths from './calendar-view-months';

// Todo - Create npm module for the times file and import it that way
import Times from '../../util/times';

export class Calendar extends React.Component {

    constructor(props) {
        super(props);

        let display = this.getInitialDisplay();

        // Bind class functions
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleSwitchView = this.handleSwitchView.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.validateProps = this.validateProps.bind(this);

        // Set initial state
        this.state = {
            displayMonth: display.month,
            displayYear: display.year,
            displayView: 'days'
        }
    }

    /**
     * Return the displayed month and displayed year for the initial rendering. 
     * This is based on the value for the picker, or set to the current date otherwise.
     * 
     * @return {{year: number, month: number}} - Object containing the displayed month and year
     */
    getInitialDisplay() {
        let { type = 'single', value = null } = this.props;

        let month = new Date().getMonth(), 
            year = new Date().getFullYear();

        // Try to set the initial view of the calendar on a selected day
        if(type === 'multiple' && value.length > 0) {
            month = Times.getLocalISOMonth(value[0]);
            year = Times.getLocalISOYear(value[0]);
        } else if(type === 'range') {
            if(value.start !== null) {
                month = Times.getLocalISOMonth(value.start);
                year = Times.getLocalISOYear(value.start);
            } else if(value.end !== null) {
                month = Times.getLocalISOMonth(value.end);
                year = Times.getLocalISOYear(value.end);
            }
        } else if(type === 'single' && value !== null) {
            month = Times.getLocalISOMonth(value);
            year = Times.getLocalISOYear(value);
        }

        return {
            month,
            year
        }
    }

    validateProps() {
        let {type, value = null, id} = this.props;
        /**
         * TODO: Create range calendar type for selecting a range
         * TODO: Create multiple calendar type for selecting multiple values
         */
        if(type === undefined || type !== 'range' || type !== 'multiple') {
            this.type = 'single';
        } else {
            this.type = type;
        }
        
        if(type === 'single') { // Valid values for single type of calendar are Date object or a string in "YYYY-mm-DD" format
            this.value = Times.normalizeDate(value);
        } else if(type === 'multiple') { // Valid values for multiple are an array of the single type values
            if(Object.prototype.toString.call(value) === "[object Array]") {
                if(value.length > 0) {
                    this.value = value.reduce((validValues, currentValue) => {
                        let tmp = Times.normalizeDate(currentValue);
                        if(tmp) {
                            validValues.push(tmp);
                        }
                        return validValues;
                    }, []);
                }
            } else {
                this.value = [];
            }
        } else if(type === 'range') { // Valid value is an object with start and end properties containing a single type value
            if(value.start !== undefined && value.end !== undefined) {
                value.start = Times.normalizeDate(value.start);
                value.end = Times.normalizeDate(value.end);
                this.value = value;
            } else {
                this.value = { start: null, end: null };
            }
        }
    }

    // Only single type works on this function
    handleSelectDate( dateString = '') {
        if(this.props.onChange) {
            this.props.onChange(dateString);
        } else {
            console.error('ARUI-CALENDAR - You have to provide an onChange prop to handle the date selection change');
        }
    }

    /**
     * Change the displayed month
     * 
     * @param {number} newMonth
     */
    handleChangeMonth(newMonth = this.state.displayMonth) {
        console.log('clicked: ' + newMonth);
        if(newMonth === -1) {
            this.setState({
                displayMonth: 11,
                displayYear: this.state.displayYear - 1
            });
        } else if(newMonth === 12) {
            this.setState({
                displayMonth: 0,
                displayYear: this.state.displayYear + 1
            });
        } else {
            this.setState({
                displayMonth: newMonth
            });
        }
    }

    /**
     * Change the displayed view.
     * 
     * @param {string} displayView - The view to display. Can be days, months or years
     * @param {number} value - The new month or year to display. Depends on the displayView.
     */
    handleSwitchView(displayView = 'days', value) {
        let { displayMonth, displayYear } = this.state;
        
        if(value !== undefined) {
            if(displayView === 'days') {
                displayMonth = value;
            }
            if(displayView === 'months') {
                displayYear = value;
            }
        }

        this.setState({
            displayView,
            displayMonth,
            displayYear
        });
    }

    render() {
        console.log('bp');
        return (
            <div className="arui-calendar">
                { this.state.displayView === 'days' && 
                <CalendarViewDays 
                    value={this.props.value} 
                    visibleMonth={this.state.displayMonth} 
                    visibleYear={this.state.displayYear} 
                    onChange={this.handleSelectDate}
                    onChangeMonth={this.handleChangeMonth}
                    onSwitchView={this.handleSwitchView}
                />
                }
                { this.state.displayView === 'months' && 
                <CalendarViewMonths 
                    value={this.props.value} 
                    visibleYear={this.state.displayYear} 
                    onChange={this.handleSelectDate}
                    onSwitchView={this.handleSwitchView}
                />
                }
            </div>
        )
    }

}

export default Calendar;