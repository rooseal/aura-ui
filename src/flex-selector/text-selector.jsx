import React from 'react'
import TextLine from '../text-line'

export class TextSelector extends React.Component {

    constructor(props) {
        super(props)

        console.log(props)

        this.state = {
            open: false
        }
    
        this.handleChangeSelection = this.handleChangeSelection.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChangeSelection (newActivityType) {
        this.props.onChange(newActivityType)
        this.setState({
            search: undefined
        })
        this.handleToggle(false)
    }

    handleToggle (event) {
        if(this.state.showAll) {
            this.setState({
                open: typeof event === 'boolean' ? event : false,
                showAll: typeof event === 'boolean' ? event : false
            })
        } else {
            this.setState({
                open: typeof event === 'boolean' ? event : true,
                showAll: typeof event === 'boolean' ? event : true
            })
        }
    }

    handleSearch (value) {
        this.setState({
            search: value,
            open: true,
            showAll: value === '' ? true : false
        })
    }

    render () {
        let { items, value } = this.props
        
        return (
            <div className="arui-flex-selector">
                <div>
                    <TextLine type="text" value={this.state.search !== undefined ? this.state.search : this.props.value} onChange={this.handleSearch} style={{marginBottom: '1px'}} />
                    <div className="arui-picker-button" onClick={this.handleToggle}>&#x25BC;</div>
                </div>
                { this.state.open &&
                    <div className="items" style={{position: 'relative', zIndex: '2'}}>
                        {
                            this.props.items
                                .sort()
                                .filter(item => {
                                    if(this.state.showAll) return true;
                                    if(item.toLowerCase().indexOf(this.state.search.toLowerCase()) === 0) {
                                        return true
                                    } else {
                                        return false
                                    }
                                })
                                .map(item => {
                                    return (
                                        <div key={item} className="arui-text-option" onClick={this.handleChangeSelection.bind(this, item)} style={{cursor: 'pointer', margin: '1px 0', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'}}>
                                            {item}
                                        </div>
                                    )
                                })
                        }
                    </div>
                }
            </div>
        )
    }

}

export default TextSelector