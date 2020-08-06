import React from "react";
import "./Customer.css";

class Customer extends React.Component {
  render() {
    const { id, image, name, birthday, gender, job } = this.props;
    return (
      <div className="CustomerContainer">
        <CustomerProfile id={id} name={name} image={image} />
        <CustomerInfo birthday={birthday} gender={gender} job={job} />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    const { id, image, name } = this.props;
    return (
      <div className="profileContainer">
        <div className="imgContainer">
          <img src={image} alt="profile" />
        </div>
        <p>
          {name}({id})
        </p>
      </div>
    );
  }
}
class CustomerInfo extends React.Component {
  render() {
    const { birthday, gender, job } = this.props;
    return (
      <div className="infoContainer">
        <p>{birthday}</p>
        <p>{gender}</p>
        <p>{job}</p>
      </div>
    );
  }
}

export default Customer;
