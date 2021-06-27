import React, { useState } from "react";
import useForm from "./hooks/useForm";
const FormGroups = () => {
  const [name, setName] = useForm("");
  const [email, setEmail] = useForm("");
  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };
  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };
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
            onChange={setName}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={setEmail}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormGroups;
