import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import VManu from './components/VMenu/Menu'
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <Header title="My App" subtitle="Welcome to my app!"/>
      <div className="content-center">
        <VManu/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
