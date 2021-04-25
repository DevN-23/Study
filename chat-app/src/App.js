import { useState } from 'react';
import Tweet from './components/Tweet';
import './App.css';

function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { name: 'Hodor', message: 'Hold the door!!!' },
    { name: 'John Snow', message: 'I\'m nights watch on the walls!!!' },
    { name: 'Tori', message: 'Don\'t know anyone' },
    { name: 'Arya Stark', message: 'Valar Morghulis :p :p' }
  ])

  const increment = () => {
    setLoggedIn(!isLoggedIn);
    setCount(count+1);
  }

  return (
    <div className="app">
      {
        users.map(user => {
          return (
            <Tweet name={user.name} message={user.message} key={user.name} />
          )
        })
      }
    </div>
  );
}

const getTweets = () => {
  return (
    <div className="app">
      <Tweet name="Hodor" message="Hold the door!!!" />
      <Tweet name="John Snow" message="I'm nights watch on the walls!!!" />
      <Tweet name="Tori" message="Don't know anyone" />
      <Tweet name="Arya Stark" message="Valar Morghulis :p :p" />
    </div>
  )
}
export default App;
