import { useState, useEffect } from "react";
import GETAPI from './asset/components/get';
import EDITAPI from './asset/components/edit';
import ADDAPI from './asset/components/add';
import './asset/css/App.css';

function App(props) {
  
  const [adds, setAdd] = useState(props.addOne);
  function addOne(name) {
    let first_name, last_name, job, description;
    const newOne = { first_name: first_name, last_name: last_name, job: job, description: description };
    setAdd([...adds, newOne]);
  }
  function showing(){
    document.querySelector('.fade').classList.remove("hide");
    document.querySelector('.fade').classList.add("showing");
  }

  return (
    
    <div className='App'>
      
      <header>
        <a href=''><h1>Contact List</h1></a>
        <button type="button" className="btn btn-add" onClick={() => showing()}>
          ADD
        </button>
      </header>
      <div className='content'>
        <h2>Contacts <span className='sort'><button >Sort</button></span></h2>
        <GETAPI />
        
      </div>
    </div>
  );
}

export default App;
