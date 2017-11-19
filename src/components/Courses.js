import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import CSS from './courses/CSS';
import HTML from './courses/HTML';
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to='/courses/html' activeClassName="active">HTML</NavLink></li>
        <li><NavLink to='/courses/css' activeClassName="active">CSS</NavLink></li>
        <li><NavLink to='/courses/javascript' activeClassName="active">JavaScript</NavLink></li>
      </ul>
    </div>

    <Route path="/courses/css" component={CSS} />
    <Route path="/courses/html" component={HTML} />
    <Route path="/courses/javascript" component={JavaScript} />
  </div>
);

export default Courses;
