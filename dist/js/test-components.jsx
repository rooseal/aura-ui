import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from '../../src/date-picker';
import TimePicker from '../../src/time-picker';
import TextLine from '../../src/text-line';
import TextSelector from '../../src/flex-selector/text-selector';
import KeyHandler from '../../src/key-control/key-handler';

import '../../src/css/ui-comp.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text1: '',
            date1: null,
            time1: null,
            selection: ''
        }
        
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeSelection = this.handleChangeSelection.bind(this);
    }

    componentDidMount() {
        this.getItems()
    }

    getItems() {
        fetch('/list')
            .then(response => response.json())
            .then(data => this.setState({
                items: data.data
            }))
    }

    handleChangeText(value = '') {
        this.setState({
            text1: value
        });
    }
    
    handleChangeDate(value) {
        this.setState({
            date1: value
        });
    }
    
    handleChangeTime(value) {
        this.setState({
            time1: value
        });
    }
    
    handleChangeSelection(value) {
        this.setState({
            selection: value
        });
    }

    render() {
        return  (
            <div>
                <DatePicker value={this.state.date1} onChange={this.handleChangeDate} />
                <TimePicker value={this.state.time1} onChange={this.handleChangeTime} />
                <TextLine value={this.state.text1} onChange={this.handleChangeText} />
                <TextSelector value={this.state.selection} items={this.state.items || []} onChange={this.handleChangeSelection} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));