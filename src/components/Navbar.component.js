import React, { Component } from 'react';
import { Link } from 'react-router';

const navbarItems = [
  {
    route: '/',
    text: 'Home'
  },
  {
    route: '/project',
    text: 'Project'
  },
  {
    route: '/about',
    text: 'About'
  },
  {
    route: '/about/contact',
    text: 'Contact'
  }
];

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: props.location.pathname
    };
  }

  onChangeNav(e) {
    const newRoute = e.target.getAttribute('href');
    this.setState({currentPage: newRoute });
  }

  renderNavList() {
    return navbarItems.map((item) => (
      <li key={ item.route } className={this.state.currentPage === item.route ? 'active' : ''}>
        <Link to={ item.route } onClick={this.onChangeNav.bind(this)}>{ item.text }</Link>
      </li>
    ));
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">React Boilerplate</Link>
          </div>
          <ul className="nav navbar-nav">
            { this.renderNavList() }
          </ul>
        </div>
      </nav>
    );
  }
}