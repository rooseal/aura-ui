import React from 'react';
import ReactDOM from 'react-dom';

import TextLine from '../../src/text-line';

import '../../src/css/ui-comp.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text1: '',
            date1: null,
            time1: null,
            selection: null
        }
        
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(value = '') {
        this.setState({
            text1: value
        });
    }

    render() {
        return <TextLine label="Text hier" value={this.state.text1} onChange={this.handleChangeText} />
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));