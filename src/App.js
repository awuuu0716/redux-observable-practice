import React, { useState } from 'react';
import { connect } from 'react-redux';
import { printHello } from './actions/actions';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={() => console.log('a')}>Click</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    printHello: () => dispatch(printHello()),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
