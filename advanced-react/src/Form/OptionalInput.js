import { useState } from "react";

function OptionalInput({ labelText, inputID, type, placeholder, maxLength }) {
  const [target, setTarget] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    setTarget(event.target.value);
  }

  return (
    <div className="Field">
      <label htmlFor={inputID}>{labelText}</label>
      <input
        id={inputID}
        type={type}
        placeholder={placeholder}
        value={target}
        maxLength={maxLength}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default OptionalInput;
