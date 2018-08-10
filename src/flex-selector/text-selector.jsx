import React from 'react'
import TextLine from '../text-line'
import List from './list'

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
        this.handleNextItem = this.handleNextItem.bind(this)
        this.handlePreviousItem = this.handlePreviousItem.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            let key = e.keyCode
            switch(key) {
                case 38:
                    e.preventDefault()
                    this.handlePreviousItem()
                    break
                case 40:
                    e.preventDefault()
                    this.handleNextItem()
                    break
            }
        })
    }

    handleNextItem() {
        let { hightlighted = 0, search = '' } = this.state
        let { items } = this.props

        items = Object.keys(items)
            .reduce((arr, group) => {
                arr.concat(...items[group])
                return arr;
            }, [])
            .filter(item => {
                // If showAll is active, don't filter the items
                if(showAll) return true
                // Normalize the item
                if(typeof item === 'string') {
                    item = {
                        value: item,
                        content: item
                    }
                }
                // Filter the items
                if(item.content.toLowerCase().indexOf(search.toLowerCase()) === 0) {
                    return true
                } else {
                    return false
                }
            })
        
        if(hightlighted === items.length) {
            return
        }

        this.setState({
            hightlighted: hightlighted + 1
        })
        
    }

    handlePreviousItem() {
        let { hightlighted = 0, search } = this.state
        let { items } = this.props

    

        if(hightlighted === 0) {
            return
        }

        this.setState({
            hightlighted: hightlighted - 1
        })
        
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
        let { list, value } = this.props
        let { search, showAll, open } = this.state
        
        // let groups = items

        // Create an object with only group the array that was passed
        // if(Array.isArray(items)) {
        //     groups = {
        //         default: items
        //     }
        // }
        
        return (
            <div className="arui-flex-selector">
                <div>
                    <TextLine type="text" value={search !== undefined ? search : value} onChange={this.handleSearch} style={{marginBottom: '1px'}} />
                    <div className="arui-picker-button" onClick={this.handleToggle}>&#x25BC;</div>
                </div>
                { open &&
                    <List filter={search} list={list} value={value} onChange={this.handleChangeSelection} />
                }
            </div>
        )
    }

}

// TextSelector.propTypes = {
//     items: PropTypes.ArrayOf(Object),
//     value: PropTypes.String
// }

export default TextSelector

/**
 * Items is an array representing the list to use
 * Types: <Object>
 * Properties = content: <String> optional (default = value)
 *              value: <String>
 *
 * 
 * Value is a string representing the chosen item
 * Type: <String>
 * 
 * 
 * Options is an object with some options to configure the selector
 * Properties = search: <boolean> (default = true)
 * 
*/

/*
.filter(item => {
    // If showAll is active, don't filter the items
    if(showAll) return true
    // Normalize the item
    if(typeof item === 'string') {
        item = {
            value: item,
            content: item
        }
    }
    // Filter the items
    if(item.content.toLowerCase().indexOf(search.toLowerCase()) === 0) {
        return true
    } else {
        return false
    }
})
*/