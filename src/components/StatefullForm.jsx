import React, { useState } from "react";

const StatefullForm = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState("exampull@gmail.com");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log(email);
    if (password.length < 6) {
      setError("password must be 6 charchter");
    } else {
      setError("");
    }
  };
  const handleNameChanage = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChanage}
          type="text"
          name="name"
          placeholder="name"
        />{" "}
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
        />{" "}
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <input type="number" name="number" placeholder="Mobile Number" /> <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default StatefullForm;
