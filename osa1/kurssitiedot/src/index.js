import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.name}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = props => {
  return (
    <>
      {props.parts.map(part => {
        return <Part key={part.name} part={part} />;
      })}
    </>
  );
};

const Total = props => {
  console.log(props.parts);
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
      )}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
