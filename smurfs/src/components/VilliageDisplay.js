import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getChars } from "../actions";
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
        <Character character={character} getChars={getChars} />
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
  { getChars }
)(VillageDisplay);
