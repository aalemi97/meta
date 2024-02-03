import { useState } from "react";

const ErrorMessage = ({ errorMessage }) => {
  return <p className="FieldError">{errorMessage}</p>;
};

function ConditionalInput({
  labelText,
  inputID,
  type,
  placeholder,
  minLength,
  maxLength,
  errorMessage,
  isValid,
  validate,
}) {
  const [target, setTarget] = useState({ value: "", isTouched: false });

  function handleInputChange(event) {
    event.preventDefault();
    setTarget({ ...target, value: event.target.value });
    isValid({ ...target, value: event.target.value });
  }

  return (
    <div className="Field">
      <label htmlFor={inputID}>
        {labelText} <sup>*</sup>
      </label>
      <input
        id={inputID}
        type={type}
        placeholder={placeholder}
        value={target.value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleInputChange}
        onBlur={() => {
          setTarget({ ...target, isTouched: true });
        }}
      />
      {validate(target) ? <ErrorMessage errorMessage={errorMessage} /> : null}
    </div>
  );
}

export default ConditionalInput;
