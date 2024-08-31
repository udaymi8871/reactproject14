import React from 'react';
import logo from './logo.svg';
import './App.css';
import MasterData from './component'
import { useState } from 'react';
import StudentList from './constant'

function App() {
  const[data, setData] = useState<any[]>([])
  return (
    <div>
    <MasterData
    
    data ={StudentList}
    />
    </div>
  );
}

export default App;
