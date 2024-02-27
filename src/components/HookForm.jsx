import React from "react";
import useInputState from "./Hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("Sojib");
  const handleSubmit = (e) => {
    console.log("form", name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="name"
        />{" "}
        <br />
        <input type="email" name="email" placeholder="Email" /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
