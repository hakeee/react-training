import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../constants/actionTypes'
import Button from './Button';

class Numbers extends PureComponent {
    render() {
        return (
            <span>
                <Button name={"1"} callback={() => this.props.callback(1)} />
                <Button name={"2"} callback={() => this.props.callback(2)} />
                <Button name={"3"} callback={() => this.props.callback(3)} />
                <br/>
        
                <Button name={"4"} callback={() => this.props.callback(4)} />
                <Button name={"5"} callback={() => this.props.callback(5)} />
                <Button name={"6"} callback={() => this.props.callback(6)} />
                <br/>
                
                <Button name={"7"} callback={() => this.props.callback(7)} />
                <Button name={"8"} callback={() => this.props.callback(8)} />
                <Button name={"9"} callback={() => this.props.callback(9)} />
                <Button name={"0"} callback={() => this.props.callback(0)} />
            </span>
        )
    }
}

const mapStateToProps = () => {};
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callback: (value) => dispatch({type: ActionTypes.APPEND_INPUT, input: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);