import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => {
        return <Part key={part.name} part={part} />;
      })}
    </>
  );
};

const Total = ({ course }) => {
  return (
    <p>
      <b>Number of exercises </b>
      {course.parts.reduce(
        (courseTotal, currentPart) => courseTotal + currentPart.exercises,
        0
      )}
    </p>
  );
};

export default Course;
