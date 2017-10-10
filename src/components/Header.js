import React from 'react';



const Header = (props) => {
   const { title, className } = props;
   return (
      <div className={`header text-center ${className}`}>
         <h1>{title}</h1>
      </div>
   )
}
