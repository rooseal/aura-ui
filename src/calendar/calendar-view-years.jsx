import React from 'react';
import PropTypes from 'prop-types';

// import { createNumericArray } from 'ar-time';

import CalendarControls from './calendar-controls';

function createNumericArray(length, start = 0) {
    let arr = [], i = 0;
    while(i < length) {
        arr.push(start + i);
        i += 1;
    }
    return arr;
}

export class CalendarViewYears extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rangeStart: this.calculateRangeStart()
        }
    }

    calculateRangeStart() {
        let {visibleYear} = this.props;

        return Math.floor(visibleYear / 12) * 12;
    }

    handleChangeRange(direction) {
        let { rangeStart } = this.state;
        if(direction === 'previous') {
            rangeStart -= 12;
        } else if(direction === 'next') {
            rangeStart += 12;
        }

        this.setState({
            rangeStart
        });
    }

    render() {
        let {rangeStart} = this.state, { onSwitchView } = this.props;

        return (
            <div>
                <CalendarControls text={rangeStart + ' - ' + (rangeStart + 11)} onSpecial={() => onSwitchView('years')} />

                <div className="arui-calendar-body">
                    { createNumericArray(12, rangeStart).map((value) => {
                        return (
                            <div key={value} className={`arui-calendar-year`} onClick={() => onSwitchView('months', value)}>
                                { value }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

CalendarViewYears.propTypes = {
    visibleYear: PropTypes.number.isRequired,
    onSwitchView: PropTypes.func.isRequired
}

export default CalendarViewYears;