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

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => {
        return <Course course={course} key={"course" + course.id} />;
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
