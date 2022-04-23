import React, { useState } from "react";

const ADDAPI = () => {
  
  return (
  <div className="fade">
    <form>
      <label>First-name
        <input
          type="text"
        />
      </label>
      <label>Last-name
        <input
          type="text"
        />
      </label>
      <label>Job
        <input
          type="text"
        />
      </label>
      <label>Description
        <input
          type="text"
        />
      </label>
      <div className="btn-group">
        <button type="submit" className="btn btn-close" >
          Cancel
        </button>
        <button type="submit" className="btn btn-save" >
          Save
        </button>
      </div>
    </form>
  </div>
  )
}

export default ADDAPI;
