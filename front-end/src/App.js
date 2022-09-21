import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  return (
    <Router>
      <UnauthenticatedApp />
    </Router>
  );
}

export default App;
