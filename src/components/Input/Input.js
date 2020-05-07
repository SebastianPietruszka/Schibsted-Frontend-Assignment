import React from "react";

function Input({ type, value, onChange, name, checked }) {
  switch (type) {
    case "checkbox":
      return (
        <div>
          <input
            type="checkbox"
            id={name}
            onChange={() => onChange(name)}
            checked={checked}
          />
          <label htmlFor={name}>{name}</label>
        </div>
      );
    default:
      return <input value={value} onChange={onChange} />;
  }
}

export default Input;
