import './App.css';
import React, { useState } from 'react';
import Search from './components/Search.jsx';
function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
  };

  return <Search className={"container"} />
}



export default App;
