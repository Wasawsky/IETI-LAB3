import React, {Component} from 'react';
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';

const LoginView = () => (
      <Login/>
    );
function App() {
  return (
    <Router>
                <div className="App">
                    <div>
                        <Route exact path="/" component={LoginView}/>
                    </div>
                </div>
            </Router>
  );
}

export default App;
