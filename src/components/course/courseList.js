import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './courseListRow';

const CourseList = ({courses}) => {
    return (
        <table className="table">
          <thead>
              <tr>
                  <th>&nbsp;</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Length</th>
              </tr>
          </thead>
          <tbody>
            {courses && courses.map(course =>
              <CourseListRow key={course.id} course={course}/> 
            )}
        </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;