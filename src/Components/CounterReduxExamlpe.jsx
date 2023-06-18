import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//implement slices here 
import { decrement, increment } from '../StoreSrc/Slices/counterSlice'

export function CounterReduxExamlpe() {
  const appState = useSelector(state => state)
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          //implement slices here 

          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {console.log("APP STATE", appState)}
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          //implement slices here 

          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}