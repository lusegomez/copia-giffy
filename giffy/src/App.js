import React from 'react';
import './App.css';

import {Link, Route } from "wouter"

import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Navbar></Navbar>
        <Route path="/gif/:keyword" component= {ListOfGifs}></Route>
      </section>
    </div>
  );
}

export default App;
