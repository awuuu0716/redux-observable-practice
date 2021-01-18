import React from 'react';
import { connect } from 'react-redux';
import { callApi, clickBtnA, clickBtnB } from './redux/actions';

function App({ url, getNewPic, message, clickBtnA, clickBtnB, isBtnAClicked }) {
  console.log(isBtnAClicked)
  return (
    <>
      <button onClick={() => clickBtnA()}>Button A</button>
      <button onClick={() => clickBtnB()}>Button B</button>
      <div>{message}</div>
      <button onClick={() => getNewPic()}>Get new pic!</button>
      <div>
        <img src={url} alt="cat" />
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    url: store.test.url,
    message: store.test.message,
    isBtnAClicked: store.test.isBtnAClicked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickBtnA: () => dispatch(clickBtnA()),
    clickBtnB: () => dispatch(clickBtnB()),
    getNewPic: () => dispatch(callApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
