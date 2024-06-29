import React from 'react'
import './CounterOutput.css'

const CounterOutput = (props) => (
  <div className="counter-output" style={props.style}>Counter: {props.value}</div>
)

export default CounterOutput
