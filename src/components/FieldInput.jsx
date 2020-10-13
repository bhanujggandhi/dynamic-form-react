import React from "react";

const FieldInput = ({ Fields, handleChange, deleteField }) => {
  return Fields.map(({ name }, key) => (
    <div key={name}>
      <input
        type='text'
        className='uk-input'
        name={name}
        placeholder='Your skill'
        value={Fields[key].value}
        style={{ width: 300, marginRight: 20 }}
        onChange={handleChange(name)}
      />
      <button
        className='uk-button uk-button-danger'
        style={{ display: "inline-block" }}
        onClick={() => deleteField(name)}
        disabled={Fields.length === 1}
      >
        <i className='fa fa-times' aria-hidden='true' />
      </button>
    </div>
  ));
};

export default FieldInput;
