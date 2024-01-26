import React from 'react';

const Button = ({btnStyle , children ,btnContent}) => {
  return (
    <>
    <button className={btnStyle}>  {children} {btnContent} </button>
    </>
  )
};

export default Button;