import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

const Form = props => {
  const { addSmurf, isPosting } = props;
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChange = event => {
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value,
      id: Date.now()
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(smurf);
    addSmurf(smurf);
    setSmurf({ name: "", age: "", height: "", id: "" });
  };

  if (isPosting) {
    return <h1>Loading...</h1>;
  }

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <h2>Create a Smurf</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={smurf.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={smurf.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="height"
        placeholder="height"
        value={smurf.height}
        onChange={handleChange}
      />
      <button type="submit">Add Smurf</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    isPosting: state.isPosting
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(Form);
