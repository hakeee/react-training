import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import * as Actions from './constants/actionTypes'
import Button from './Button';
import Numbers from './Numbers';

const App = ({sum, input, addition, subtraction, multiplication, division, c, cc}) => {
  return (
    <div>
      Sum: {sum}
      <br/>
      input: {input}
      <br/>

      <Numbers />

      <br/>

      <Button name={"+"} callback={addition}/>
      <Button name={"-"} callback={subtraction}/>
      <Button name={"*"} callback={multiplication}/>
      <Button name={"/"} callback={division}/>
      <Button name={"C"} callback={c}/>
      <Button name={"CC"} callback={cc}/>
    </div>
  )
}

App.propTypes = {
  sum: propTypes.any.isRequired,
  input: propTypes.any,
  addition: propTypes.func.isRequired
}

const mapStateToProps = state => {
   return {
     sum: state.sum,
     input: state.input
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addition: () => { dispatch({type: Actions.ADDITION})},
    subtraction: () => { dispatch({type: Actions.SUBTRACTION})},
    multiplication: () => { dispatch({type: Actions.MULTIPLICATION})},
    division: () => { dispatch({type: Actions.DIVISION})},
    c: () => { dispatch({type: Actions.C})},
    cc: () => { dispatch({type: Actions.CC})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
