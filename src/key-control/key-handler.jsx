import React from 'react'

export class KeyHandler extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
      document.addEventListener('keydown', e => {
        console.log(e)
      })
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown')
  }

  render() {
    return this.props.children(this.state)
  }
}

export default KeyHandler