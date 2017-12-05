import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import * as ActionTypes from '../constants/actionTypes'
import Button from './Button';
import Numbers from './Numbers';
import * as CalcSelector from '../selectors/calcSelectors'

const App = ({sum, input, plusSum, avg, addition, subtraction, multiplication, division, c, cc}) => {
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
      <br/>

      Sum(+): {plusSum}
      <br/>
      Avg: {avg}
      <br/>
    </div>
  )
}

App.propTypes = {
  sum: propTypes.any.isRequired,
  input: propTypes.any,
  plusSum: propTypes.any.isRequired,
  avg: propTypes.any.isRequired,
  addition: propTypes.func.isRequired,
  subtraction: propTypes.func.isRequired, 
  multiplication: propTypes.func.isRequired, 
  division: propTypes.func.isRequired, 
  c: propTypes.func.isRequired, 
  cc: propTypes.func.isRequired
}

const mapStateToProps = state => {
   return {
     sum: state.sum,
     input: state.input,
     plusSum: CalcSelector.getSum(state),
     avg: CalcSelector.getAvg(state)
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addition: () => { dispatch({type: ActionTypes.ADDITION})},
    subtraction: () => { dispatch({type: ActionTypes.SUBTRACTION})},
    multiplication: () => { dispatch({type: ActionTypes.MULTIPLICATION})},
    division: () => { dispatch({type: ActionTypes.DIVISION})},
    c: () => { dispatch({type: ActionTypes.C})},
    cc: () => { dispatch({type: ActionTypes.CC})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
