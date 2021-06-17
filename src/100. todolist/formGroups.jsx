import React, { Component } from "react";
class FormGroups extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Form</h1>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default FormGroups;
