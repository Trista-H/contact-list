import React, { useState } from "react";

function Add(props) {

    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    fetch('https://orbit-demo.orbitek.co/db_seed.json', {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((actualData) => {
      setData(actualData.data);
    })

    let first_name, last_name, setName, job, description;

    function handleSubmit() {
      props.addOne(first_name);
      props.addOne(last_name);
      props.addOne(job);
      props.addOne(description);
      setName("");
    }
    function hiding(){
      document.querySelector('.fade').classList.add("hide");
    }
    function saveHiding(){
      document.querySelector('.fade').classList.add("hide");
    }
  return (
    <div className="fade hide">
      <form onSubmit={handleSubmit}>
        <label>First-name
          <input
            type="text"
            autoComplete="off"
            value={first_name}
          />
        </label>
        <label>Last-name
          <input
            type="text"
            autoComplete="off"
            value={last_name}
          />
        </label>
        <label>Job
          <input
            type="text"
            autoComplete="off"
            value={job}
          />
        </label>
        <label>Description
          <input
            type="text"
            autoComplete="off"
            value={description}
          />
        </label>
        <div className="btn-group">
          <button type="submit" className="btn btn-close" onClick={() => hiding()}>
            Cancel
          </button>
          <button type="submit" className="btn btn-save" onClick={() => saveHiding()}>
            Save
          </button>
          <button type="submit" className="btn btn-other">
            Add More
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
