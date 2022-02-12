import './App.css';
import useAuth from './hooks/useAuth';

import Private from './Private';
import Public from './Public';

function App() {
  const [token] = useAuth(false);

  if (token) {
    console.log('auth');
    return <Private />;
  }

  return <Public />;
}

export default App;
