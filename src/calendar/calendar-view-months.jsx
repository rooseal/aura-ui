import React from 'react';

import Times from '../../util/times';

import CalendarControls from './calendar-controls';

export class CalendarViewMonths extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChangeMonth(month) {
        this.props.onChangeMonth && this.props.onChangeMonth(month);
    }

    render() {
        let {visibleYear} = this.props;

        return (
            <div>
                <CalendarControls text={this.props.visibleYear} onSpecial={() => this.props.onSwitchView('years')} />

                <div className="arui-calendar-body">
                    { Times.monthStrings.map((month, i) => {
                        return (
                            <div key={month} className={`arui-calendar-month`} onClick={() => this.props.onSwitchView('days', i)}>
                                { month }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default CalendarViewMonths;