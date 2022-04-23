import React, { useState } from "react";
import GETAPI from './asset/components/get';
import EDITAPI from './asset/components/edit';
import ADDAPI from './asset/components/add';
import './asset/css/App.css';

function App(props) {
  
  const [isVisible , setIsVisible] = useState()
  function addVisible(){

    setIsVisible(true);
  }


  function sortData() {
    fetch('https://orbit-demo.orbitek.co/db_seed.json').then((res) => res.json())
    .then((data) => {
        data.sort((a, b) => a.first_name - b.first_name);
        this.useState({data: data});
        console.log(data)
    });
  }
  

  return (

    <div className='App'>
      {isVisible && <ADDAPI />}
      <header>
        <a href='header'><h1>Contact List</h1></a>
        <button type="button" className="btn btn-add" onClick={() => {  addVisible() }} >
          ADD
        </button>
      </header>
      <div className='content'>
        <div className="sort"><button className="btn" onClick={() => {  sortData() }}>
          Sort by Name</button></div>
        <GETAPI />
      </div>
    </div>

  );
}

export default App;
