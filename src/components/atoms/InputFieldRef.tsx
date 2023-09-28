import React, { ChangeEvent, RefObject } from "react";

interface InputFieldRefType {
  label: string;
  name: string;
  type: string;

  inputRef?: RefObject<HTMLInputElement>;
  className?: string;
}

const InputFieldRef: React.FC<InputFieldRefType> = ({
  label,
  name,
  type,
 
  inputRef,
  className,
}) => {
  return (
    <div className={`input-field-auth ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
      className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5"
        type={type}
        id={name}
        name={name}
        readOnly={true}
        ref={inputRef}
      />
    </div>
  );
};

export default InputFieldRef;
