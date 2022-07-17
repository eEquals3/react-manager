import React from 'react';
import './InputField.css';

interface Props{
    name:string
}

export default function InputField({ name }:Props) {
  return (
    <form id="first_name">
      <div className="form-group">
        <label
          htmlFor="Name"
          style={{ background: 'transparent' }}
        >
          {name}
          <input
            type="text"
          />
        </label>
        <input type="text" className="form-control input-lg" />
      </div>
    </form>
  );
}
