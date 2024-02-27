import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.number.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="Email" /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <input type="number" name="number" placeholder="Mobile Number" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
