import React, { useState } from 'react';
import { connect } from 'react-redux';
import { printHello } from './actions/actions';

function App({ data, printHello }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={() => printHello(inputValue)}>Click</button>
      <div>{data}</div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { data: store.todo.data };
};

const mapDispatchToProps = (dispatch) => {
  return { printHello: (payload) => dispatch(printHello(payload))};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
