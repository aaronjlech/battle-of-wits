import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const GameForm = ( props ) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-container">

        <Button
          className="button-round primary"
          type="submit"
          label="Start Game"
        />
      </div>
    </form>
  )
}

export default GameForm;
