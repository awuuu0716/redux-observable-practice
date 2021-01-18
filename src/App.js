import React from 'react';
import { connect } from 'react-redux';
import { clickBtnA } from './redux/actions';

function App({ data, clickBtnA }) {

  return (
    <>
      <button onClick={() => clickBtnA()}>Button A</button>
      <div>{data}</div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { data: store.todo.data };
};

const mapDispatchToProps = (dispatch) => {
  return { clickBtnA: () => dispatch(clickBtnA())};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
