import React, { useState } from "react";
import ADDAPI from './add';

function GetAPI(props) {

  const [data, setData] = useState(null);
  async function loadData() {
    const response = await fetch('https://orbit-demo.orbitek.co/db_seed.json');
    const data = await response.json();
    setData(data); 
  }
  loadData();

  const [isVisible , setIsVisible] = useState()
  function editVisible(){
    setIsVisible(true);
  }
  
  return (
    <div>
    {isVisible && <ADDAPI />}

      <ul>
        {data && data.map(({ id,first_name, last_name, job, description}) => (
        <li key={id}>
          <div>
            <span className='avatar'></span>
          </div>
          <div>
            <span className='name'>{first_name} {last_name}</span>
            <span className='title'><small>Job:</small>{job}</span>
            <span className='desc'><small>Description:</small>{description}</span>
          </div>
          <div>
            <button className='btn btn-edit'onClick={() => {  editVisible() }} >
              Edit
            </button>
            <button className='btn btn-del'>
              Delete
            </button>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default GetAPI;
