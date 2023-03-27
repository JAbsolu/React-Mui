import Navbar from './components/navBar/navBar';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';

function App() {
  
  const theme = useTheme();

  return (
    <div className="App" >
      <Navbar/>
    </div>
  );
}

export default App;
