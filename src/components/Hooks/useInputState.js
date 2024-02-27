import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setvalue] = useState(defaultValue);

  const handleChage = (e) => {
    setvalue(val);
  };
  return [value, handleChage];
};

export default useInputState;
