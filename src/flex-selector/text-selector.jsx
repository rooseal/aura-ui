import React from 'react'
import TextLine from '../text-line'

export class TextSelector extends React.Component {

    constructor(props) {
        super(props)

        // Set default state
        this.state = {
            open: false,
            visible: this.normalizeItems(props.items)
        }
    
        // Bind event handlers
        this.handleChangeSelection = this.handleChangeSelection.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleNextItem = this.handleNextItem.bind(this)
        this.handlePreviousItem = this.handlePreviousItem.bind(this)
        this.handleSetFocus = this.handleSetFocus.bind(this)
    }

    // TODO - Check why first update fails after clearing search

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

    componentWillReceiveProps(nextProps) {
        console.log('receive');
        if(nextProps.items && nextProps.items !== this.props.items) {
            this.setState({
                visible: this.normalizeItems(nextProps.items)
            })
        }
    }

    normalizeItems(items) {
        console.log(items)
        // Normalize list structure
        let groupedItems = Object.assign({}, (Array.isArray(items)) ? { default: items } : items)
        // Normalize list items
        Object.keys(groupedItems).forEach(group => groupedItems[group] = groupedItems[group].map(item => typeof item === 'string' ? { value: item, content: item } : item))

        console.log(groupedItems)

        return groupedItems
    }

    handleSetFocus(value) {
        this.setState({
            focus: value
        })
    }

    handleNextItem() {
        let { focus, search = '' } = this.state
        let { items } = this.props
        
        if(focus === items.length) {
            return
        }

        this.setState({
            focus: focus + 1
        })
        
    }

    handlePreviousItem() {
        let { focus, search } = this.state

        if(focus === 0) {
            return
        }

        this.setState({
            focus: focus - 1
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
        let groups = this.normalizeItems(Object.assign({}, this.props.items))
        let { showAll } = this.state

        // Filter and sort the arrays
        Object.keys(groups)
            .forEach(group => {
                groups[group] = groups[group]
                    .filter(item => {
                        // If showAll is active, don't filter the items
                        if(showAll) return true
                        // Filter the items
                        if(item.content.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                            return true
                        } else {
                            return false
                        }
                    })
                    .sort() 
            })


        this.setState({
            search: value,
            open: true,
            visible: groups,
            showAll: value === '' ? true : false
        })
    }

    render () {
        let { items, value } = this.props
        let { search, showAll, open, visible } = this.state
        let groups = visible

        console.log(groups)
        
        return (
            <div className="arui-flex-selector">
                <div>
                    <TextLine type="text" value={search !== undefined ? search : value} onChange={this.handleSearch} style={{marginBottom: '1px'}} />
                    <div className="arui-picker-button" onClick={this.handleToggle}>&#x25BC;</div>
                </div>
                { open &&
                    <div className="items" style={{position: 'relative', zIndex: '2'}}>
                        {
                            Object.keys(groups)
                                .map((group, i) => {
                                    return ([
                                        i > 0 && group !== 'default' && showAll && <div style={{height: '20px', width: '100%', backgroundColor: 'darkgray'}}>&nbsp;</div>,
                                        groups[group]
                                            .map((item, i) => {
                                                console.log(`Item: ${item}`)
                                                return (
                                                    <div key={item.value} className={`arui-text-option ${i+1===this.state.hightlighted ? 'arui-hightlight' : ''}`} onClick={this.handleChangeSelection.bind(this, item.value)} style={{cursor: 'pointer', margin: '1px 0', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'}}>
                                                        {item.content}
                                                    </div>
                                                )
                                            })
                                    ])
                                })

                        }
                    </div>
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
 * COMPONENT PROPS
 * ------------------------------------------------------------------------
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
 * ------------------------------------------------------------------------
*/

/**
 * COMPONENT STATE
 * ------------------------------------------------------------------------
 * search:  <string>    The current search term     [selector]
 * open:    <boolean>   List is visible             [selector]
 * visible: <Array>     The currently visible list  [selector]
 * showAll: <boolan>    Show all list items         [selector|list]
 * focus:   <*>         The focused item            [list]
 * ------------------------------------------------------------------------
 */