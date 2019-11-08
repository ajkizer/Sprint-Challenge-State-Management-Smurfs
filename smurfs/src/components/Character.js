import React, { useState } from "react";

const Character = props => {
  const [smurf, setSmurf] = useState(props.character);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(smurf.id);
    props.deleteSmurf(smurf);
  };

  return (
    <div>
      <h1>{props.character.name}</h1>
      <p>
        Age: {props.character.age} Height: {props.character.height}
      </p>
      <button onClick={handleSubmit}>delete</button>
    </div>
  );
};

export default Character;
