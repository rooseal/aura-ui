import React from 'react';

import Times from '../../util/times';

import CalendarControls from './calendar-controls';

export class CalendarViewDays extends React.Component {

    constructor(props) {
        super(props);

        this.filloutDaysArray = this.filloutDaysArray.bind(this);
        this.isSelectedDay = this.isSelectedDay.bind(this);
    }

    filloutDaysArray() {
        let {visibleMonth, visibleYear} = this.props,
            firstDay = Times.convertDay(new Date(visibleYear, visibleMonth, 1).getDay()), 
            lastDay = Times.convertDay(new Date(visibleYear, visibleMonth, Times.getDaysInMonth(visibleYear, visibleMonth)).getDay()),
            prependArray = [],
            appendArray = [];

        // Prepend the days from previous month
        for(let i = 0; i < firstDay; i++) {
            prependArray.push('');
        }

        // Append the days of next month
        for(let i = 6; i > lastDay; i--) {
            appendArray.push('');
        }

        return prependArray.concat(Times.getDaysAsArray(visibleYear, visibleMonth), appendArray);
    }

    isSelectedDay(dateString) {
        let {value} = this.props;

        if(Object.prototype.toString.call(value) === "[object Array]") {
            if(value.indexOf(dateString) !== -1) {
                return true;
            } else {
                return false;
            }
        }

        if(value.start !== undefined && value.end !== undefined) {
            if(value.start !== null && value.end !== null) {
                let startDate = new Date(value.start), endDate = new Date(value.end), stepDate = new Date(dateString); 
                if(stepDate >= startDate && stepDate <= endDate) {
                    return true;
                } else {
                    return false;
                }
            } else if(dateString === value.start || dateString === value.end) {
                return true;
            } else {
                return false;
            }
        }

        if(value === dateString) {
            return true;
        }
    }

    handleChangeMonth(step) {
        this.props.onChangeMonth && this.props.onChangeMonth(this.props.visibleMonth + step);
    }

    render() {
        let {visibleYear, visibleMonth, value} = this.props;

        return (
            <div>
                <CalendarControls 
                    text={Times.monthStrings[visibleMonth] + ' ' + visibleYear} 
                    onPrevious={this.handleChangeMonth.bind(this, -1)} 
                    onNext={this.handleChangeMonth.bind(this, +1)} 
                    onSpecial={() => this.props.onSwitchView('months')}
                />

                <div className="arui-calendar-headers">
                    { Times.daysInWeekStrings.map(header => <div key={header} className="arui-calendar-header">{header}</div>)}
                </div>

                <div className="arui-calendar-body">
                    { this.filloutDaysArray().map((day, i) => {
                        let today = Times.toLocalISO(new Date()),  
                            currentStep = Times.createLocalISO(visibleYear, visibleMonth, day),
                            isSelected = false, isCurrent = false;

                        if( currentStep === today) {
                            isCurrent = true;
                        }

                        if( currentStep === value) {
                            isSelected = this.isSelectedDay(currentStep);
                        }

                        return (
                            <div 
                                key={currentStep + '--' + i}
                                className={`arui-calendar-day ${isSelected ? 'arui-selected' : isCurrent ? 'arui-current' : ''} ${day !== '' && 'active'}`} 
                                onClick={() => { day !== '' && this.props.onChange(currentStep) }}
                            >
                                { day }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default CalendarViewDays;