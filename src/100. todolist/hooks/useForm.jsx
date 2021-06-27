import React, { useState } from "react";
const useForm = (initialValue) => {
  const [field, setField] = useState(initialValue);
  const handleChange = (e) => {
    setField(e.target.value);
  };
  return [field, handleChange];
};

export default useForm;
