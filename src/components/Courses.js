import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import CSS from './courses/CSS';
import HTML from './courses/HTML';
import JavaScript from './courses/JavaScript';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`} activeClassName="active">HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`} activeClassName="active">CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`} activeClassName="active">JavaScript</NavLink></li>
      </ul>
    </div>

    <Route exact path={match.path} render={() => <Redirect to={`${match.path}/html`} /> } />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />
  </div>
);

export default Courses;
