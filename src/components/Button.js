import React, { PureComponent, } from 'react';

class Button extends PureComponent {

    render() {
        return (
            <button onClick={this.props.callback}>{this.props.name}</button>
        )
    }
}

export default Button;