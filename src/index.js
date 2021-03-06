import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import style from './style.css'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  // console.log(action)

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <div>
      <Hello name="Count Zahl" />
      <h2>Counting up and down... {'\u2728'}</h2>
      <Counter />
    </div>
  </Provider>
)

render(<App />, document.getElementById('root'))
