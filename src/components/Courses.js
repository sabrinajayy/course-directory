import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from './../data/courses';

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
    <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses} />} />
    <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses} />} />
    <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses} />} />
  </div>
);

export default Courses;
