import React from 'react'
import ReactDOM from 'react-dom'

import injectSheet, { ThemeProvider } from 'react-jss'

// import DatePicker from '../../src/date-picker'
// import TimePicker from '../../src/time-picker'
// import TextSelector from '../../src/flex-selector/text-selector'
// import KeyHandler from '../../src/key-control/key-handler'
// import List from '../../src/flex-selector/list'
// import BoredButton from '../../src/bored-button'

import { TextLine, TextArea } from '../../src/text'

/*
class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text1: '',
            date1: null,
            time1: null,
            selection: ''
        }
        
        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeTime = this.handleChangeTime.bind(this)
        this.handleChangeSelection = this.handleChangeSelection.bind(this)
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
*/

const styles = theme => ({
  color: theme.accentColor,
  fontSize: theme.fontSize
})

const theme = {
  accentColor: 'red',
  fontSize: '16px'
}

const Section = injectSheet(styles)(
  props => (
    <div>
      <TextLine name="Naam" label="Naam" value={props.name} onChange={value => props.onChange('name', value)} />
      <TextArea name="Text" label="Text" value={props.text} onChange={value => props.onChange('text', value)} />
    </div>
  )
)

class ExamplePage extends React.Component {
  state = {
    name: '',
    text: ''
  }
  
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {

    return (        
      <ThemeProvider theme={theme}>
        <Section {...this.state} onChange={this.handleChange} />
      </ThemeProvider>
    )
  }
}
    
ReactDOM.render(<ExamplePage />, document.getElementById('react-app'));