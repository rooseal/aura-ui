import React from 'react';

export class CalendarControls extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="arui-calendar-controls">
                <span className="arui-calendar-controls-prev" onClick={this.props.onPrevious}><i className="fa fa-caret-left" /></span>
                <span className="arui-calendar-controls-special" onClick={this.props.onSpecial}>{this.props.text}</span>
                <span className="arui-calendar-controls-next" onClick={this.props.onNext}><i className="fa fa-caret-right" /></span>
            </div>
        )
    }

}

export default CalendarControls;