import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const GameForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-container">
        <div className="grid-x text-center justify-center">
          <div className="small-6 cell">
            <label>
              Number Of Teams (Max 3)
              <input type="number" min={0} max={3} />
            </label>
          </div>
          <div className="medium-6 cell">
            <label>
              Number Of Teams (Max 3)
              <input type="number" min={0} max={3} />
            </label>
          </div>
          <Button
            className="button-round primary"
            type="submit"
            label="Start Game"
          />
        </div>
      </div>
    </form>
  );
};

export default GameForm;
