import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getChars, deleteSmurf } from "../actions";
import Character from "./Character";

const VillageDisplay = ({
  getChars,
  isFetching,
  isPosting,
  error,
  characters,
  deleteSmurf
}) => {
  useEffect(() => {
    getChars();
  }, [getChars, isPosting]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {characters.map(character => (
        <Character
          character={character}
          deleteSmurf={deleteSmurf}
          getChars={getChars}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    characters: state.characters,
    isPosting: state.isPosting
  };
};

export default connect(
  mapStateToProps,
  { getChars, deleteSmurf }
)(VillageDisplay);
