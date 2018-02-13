import React from 'react';

export class FlexSelector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.handleChangeSelection = this.handleChangeSelection.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleChangeSelection(newActivityType) {
        this.props.onChange(newActivityType);
        this.handleToggle();
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let {items, value} = this.props;
        
        return (
            <div className="flex-selector">
                <div className="selection cf" onClick={this.handleToggle} style={{cursor: 'pointer'}}>
                    { this.props.items[this.props.value].content }
                </div>
                <div className="items" style={{display: (this.state.open ? 'block' : 'none'), position: 'relative', zIndex: '2'}}>
                    {
                        Object.keys(this.props.items).map(item => {
                            if(item === this.props.value) {
                                return null;
                            } else {
                                return (
                                    <div key={item} onClick={this.handleChangeSelection.bind(this, item)} style={{cursor: 'pointer', margin: '5px 0', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'}}>
                                        {this.props.items[item].content}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }

}

export default FlexSelector;