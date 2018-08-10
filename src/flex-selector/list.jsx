import React from 'react'

import Option from './option'

export default class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: undefined,
      list: undefined
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // let list = normalizeList(nextProps.list)

    // if(list !== undefined) {
    //   this.setState({
    //     list 
    //   })
    // }
  }

  handleChange(value) {
    if(this.props.onChange) {
      this.props.onChange(value)
    } else {
      this.setState({
        value
      })
    }
  }

  /**
   * normalizeList
   * @param {Array|object} list - The list to normalize
   * @return {object|undefined} - The normalized list, always an object unless the list didn't change, then it is undefined
   
  normalizeList(list) {
    if(this.state === undefined || this.state.list === undefined || list !== this.state.list) {
      // Update list in state
      if(Array.isArray(list)) {
        return {
          default: list
        }
      } else {
        return list
      }
    } else {
      return undefined
    }
  }
  */
  render() {
    const { search, list = [], filter } = this.props
    const iterated = Array.isArray(list) ? list : Object.keys(list)
    const value = this.state.value || this.props.value

    return (
      <div className="items" style={{position: 'relative', zIndex: '2'}}>
      {
        iterated.reduce((print, items, i) => {
          let group = Array.isArray(list) ? items : list[items]
          
          if(!Array.isArray(items)) {
            group = list[items].sort().map(item => filter !== undefined ? item.indexOf(filter) !== -1 ? <Option key={item} value={this.state.value} item={item} onChange={this.handleChange} /> : null : <Option key={item} value={this.state.value} item={item} onChange={this.handleChange} />) // Todo : create option and fill in the option
            group.unshift(<div style={{height: '20px', width: '100%', backgroundColor: 'darkgray'}}>{ Object.keys(list)[i] }</div>)
          } else {
            group = [items] // Todo : create the option and fill in the option
          }
          
          return print.concat(group)
        }, [])
      }
      </div>
    )
  }
}


/**
 * Props
 * ----------------------------------
 * value: <[object | string]>
 * list: <Arrayof [object | string]>
 * options: <object>
 * onChange: <function>
 * ----------------------------------
 * 
 * State
 * ----------------------------------
 * focus
 */

/*
Object.keys(groups)
.map((group, i) => {
    console.log(group, i);
    return ([
        i > 0 && group !== 'default' && showAll &&
            <div style={{height: '20px', width: '100%', backgroundColor: 'darkgray'}}>&nbsp;</div>
        ,
        groups[group]
            .sort()
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
            .map((item, i) => {
                // Normalize the item
                if(typeof item === 'string') {
                    item = {
                        value: item,
                        content: item
                    }
                }
                return (
                    <div key={item.value} className={`arui-text-option ${i+1===this.state.hightlighted ? 'arui-hightlight' : ''}`} onClick={this.handleChangeSelection.bind(this, item.value)} style={{cursor: 'pointer', margin: '1px 0', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'}}>
                        {item.content}
                    </div>
                )
            })
    ])
})

*/
