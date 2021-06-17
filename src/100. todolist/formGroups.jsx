import React, { Component } from "react";
class FormGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Form</h1>
        <p>
          {this.state.name.length > 0 && `Name : ${this.state.name}`} <br />{" "}
          {this.state.email.length > 0 && `Email : ${this.state.email}`}
        </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormGroups;
