import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
   const { title, className } = props;
   return (
      <div className={`header text-center ${className || ''}`}>
         <h1>{title}</h1>
      </div>
   )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Header;
