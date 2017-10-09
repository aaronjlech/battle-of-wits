import React from 'react';



const Header = (props) => {
   const { title, className } = props;
   return (
      <div className={`header ${className}`}>
         {title}
      </div>
   )
}
