import React from "react";
import "./App.css";

const Person = (props) => {
  const { img, name, job } = props.person;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>
  );
};

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "John",
      job: "Developer",
    },
    {
      img: 32,
      name: "Bob",
      job: "Designer",
    },
    {
      img: 52,
      name: "Peter",
      job: "Artist",
    },
  ];
  return people.map((person) => <Person person={person} />);
};

const App = () => {
  return <PersonList />;
};

export default App;
