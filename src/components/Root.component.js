import React from 'react';
import Navbar from './Navbar.component';

export default (props) => (
  <div>
    <Navbar {...props} />
    <div className="container">
      { props.children }
    </div>
  </div>
);