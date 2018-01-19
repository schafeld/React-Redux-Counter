import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Counter from './Counter';
import style from './style.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div>
    <Hello name="Count Zahl" />
    <h2>Counting up and down... {'\u2728'}</h2>
    <Counter />
  </div>
);

render(<App />, document.getElementById('root'));
