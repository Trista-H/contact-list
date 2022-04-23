import { useState, useEffect } from "react";
import axios from "axios"
export default function Edit(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [first_name, setfirst_name] = useState('');

  function handleChange(e) {
    setfirst_name(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, first_name);
    setfirst_name("");
    setEditing(false);
  }

  fetch('https://orbit-demo.orbitek.co/db_seed.json', {
    method: 'PATCH',
    body: JSON.stringify(),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((actualData) => {
    setData(actualData.data);
  })
  
  const [isEditing, setEditing] = useState(false);
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Update ' {props.first_name} ' to
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={first_name}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button type="submit" 
          className="btn btn-save" 
          onClick={() => handleSubmit(props.first_name)}>
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <ul>
    {data && data.map(({ id,first_name, last_name, job, description}) => (
      <li key={id}>
        <div>
          <span className='avatar'></span>
        </div>
        <div>
          <span className='name'>{first_name}{last_name}</span>
          <span className='title'><small>Job:</small>{job}</span>
          <span className='desc'><small>Description:</small>{description}</span>
        </div>
        <div>
          <span className='edit'><button type='button' className='btn btn-edit' onClick={() => setEditing(true)}>Edit</button></span>
          <span className='del'><button type='button' className='btn btn-del' onClick={() => props.deleteTask(props.id)}>Delete</button></span>
        </div>
      </li>
      ))}
    </ul>
  );
  
  return <li className="Edit">{isEditing ? editingTemplate : viewTemplate}</li>;

}