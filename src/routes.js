import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root.component';
import Home from './routes/Home.route';
import Project from './routes/Project.route';
import About from './routes/About.route';
import Contact from './routes/Contact.route';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="project" component={Project} />
    <Route path="about" component={About} />
    <Route path="about/contact" component={Contact} />
  </Route>
);