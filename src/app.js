import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a boilerplate project. Feel free to use it.</p>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#app'));