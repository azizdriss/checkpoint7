import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Button from './button';
 
class App extends React.Component {
   
componentDidMount(){
    alert("Component is created")
}

render(){
    return (
    
      <BrowserRouter>
      <div>

      
      </div>
      </BrowserRouter>
    );
    }
  };

export default App;
