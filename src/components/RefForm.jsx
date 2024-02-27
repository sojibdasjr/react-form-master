import React, { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" placeholder="name" />{" "}
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={"exmple@gmail.com"}
        />{" "}
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <input type="number" name="number" placeholder="Mobile Number" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
