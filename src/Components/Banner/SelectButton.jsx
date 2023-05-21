import React from 'react';
import "./SelectButton.css";

const SelectButton = ({children, onClick, selected}) => {
  

  return (
   
      <span onClick={onClick} style={{backgroundColor: selected ? 'gold' : "", color: selected ? 'black' : ""}}  className='selectbutton'>{children}</span>  
     
  )
}

export default SelectButton;