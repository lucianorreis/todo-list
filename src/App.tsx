import React from 'react';
import { Header } from './components/header/header';
import "./styles/global.css"
import { Tasks } from './components/tasks/Tasks';

function App() {
  return (
    <>
    <Header />

    <Tasks />
    </>
  );
}

export default App;
