import { useState } from 'react';

const Tweet = ({ name, message }) => {
  
  const [users, setUsers] = useState([
    { name: 'Hodor', message: 'Hold the door!!!' },
    { name: 'John Snow', message: 'I\'m nights watch on the walls!!!' },
    { name: 'Tori', message: 'Don\'t know anyone' },
    { name: 'Arya Stark', message: 'Valar Morghulis :p :p' }
  ]);

  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <p>Number of likes</p>
    </div>
  )
}

export default Tweet;