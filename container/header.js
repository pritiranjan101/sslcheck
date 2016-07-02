

import React from 'react';
import ReactDOM from 'react-dom'

export default class Header extends React.Component {
  
   render() {
   
   	var myStyle = {
         fontSize: 25,
         color: '#000',
         opacity:0.5,
      }

      return (
      	 
         <div className="header">
            <h1 style = {myStyle}>SSL checking of websites</h1>
       
         </div>
      );
   }
}