import { useState, useEffect } from "react";


function GetAPI(props) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://orbit-demo.orbitek.co/db_seed.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response.json())
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <div>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
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
            <span className='edit'><button className='btn btn-edit'>Edit</button></span>
            <span className='del'><button className='btn btn-del'>Delete</button></span>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default GetAPI;
