import React from "react";
import ReactDOM from "react-dom";

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

const Total = ({ courses }) => {
  return (
    <p>
      Number of exercises{" "}
      {courses.reduce(
        (total, currentCourse) =>
          total +
          currentCourse.parts.reduce(
            (courseTotal, currentPart) => courseTotal + currentPart.exercises,
            0,
            0
          ),
        0
      )}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
      <Total courses={[course]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
