import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    const response = await fetch('/.netlify/functions/helloWorld');
    return await response.json();
  };

  useEffect(() => {
    fetchData().then((res) => {
      setMessage(res.message);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{message}</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
