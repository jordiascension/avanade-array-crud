import React from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import UserForm from './component/UserForm';


import Users from './component/Users'; 


function App() {
  return (
    <div className="App">
         <h1>Redux Crud Example</h1>
         <div>
              <Link to="/">Home</Link> | 
              <Link to="/users/new">New User</Link> | 
         </div>
         <Switch>
              <Route exact path="/" component={Users}/>
              <Route exact path="/users/new" component={UserForm}  />          
          </Switch>
    </div>
  );
}

export default App;
