import React from 'react';

export class BoredButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let classNames = this.props.className;
        let w = this.props.borderWidth, s = this.props.spacing;

        return (
            <button className={`${classNames} arui-bored-button`} onClick={this.props.onClick}>
                <div className="arui-bored-button--left" style={{width: w, left: s}} ></div>
                <div className="arui-bored-button--top" style={{height: w, top: s   }} ></div>
                <div className="arui-bored-button--right" style={{width: w, right: s}} ></div>
                <div className="arui-bored-button--bottom" style={{height: w, bottom: s}} ></div>
                { this.props.children }
            </button>
        )
    }

}

export default BoredButton;