import React, { useState } from "react";
const FormGroups = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <h1>Form</h1>
      <p>
        {name.length > 0 && `Name : ${name}`} <br />{" "}
        {email.length > 0 && `Email : ${email}`}
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormGroups;
