import * as React from 'react';

var style = require('./App.scss');
var base = require('./../../Style/Base.scss');

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={style.App}>
        <div className={style.App_header}>
          <img src={logo} className={style.App_logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={style.App_intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className={style.App_block}>我是一个兵</div>
        <div className={base.box}>我是box</div>
      </div>
    );
  }
}

export default App;
