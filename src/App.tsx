import React from 'react';
import './App.css';
import { useAuth } from './context/AuthContext';

import Private from './Private';
import Public from './Public';

function App() {
  const [token] = useAuth(false);

  if (token) {
    return <Private />;
  }

  return <Public />;
}

export default App;
