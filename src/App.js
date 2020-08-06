import React, { Component } from "react";
import "./App.css";
import Customer from "./component/Customer";

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "Hong",
    birthday: "020115",
    gender: "male",
    job: "student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "기윤",
    birthday: "020115",
    gender: "male",
    job: "student",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "Park",
    birthday: "020115",
    gender: "male",
    job: "student",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          const { id, image, name, birthday, gender, job } = c;
          return (
            <Customer
              key={id}
              id={id}
              image={image}
              name={name}
              birthday={birthday}
              gender={gender}
              job={job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
