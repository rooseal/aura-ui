import React from 'react'

const option = props => {
  let { item, value, hightlighted, onChange } = props

  // Normalize primitives to full object
  if(typeof item === 'string') {
    item = {
      value: item,
      content: item
    }
  }
  
  // Render the component
  return (
    <div 
      className={`arui-text-option ${hightlighted ? 'arui-hightlight' : ''}`} 
      onClick={onChange.bind(undefined, item.value)} >
        {item.content}
    </div>
  )
}

export default option