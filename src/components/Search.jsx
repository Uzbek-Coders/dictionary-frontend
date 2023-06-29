import React, { useState } from 'react';
import Result from './Result.jsx';
function Search() {

    const [selectedValue, setSelectedValue] = useState('en-uz');
    const [inputText, setInputText] = useState("");
    const [click, setClick] = useState(false);
    

  return (
    <div className='container'>
          <select onChange={(event) => { setSelectedValue(event.target.value); setClick(false)}}>
        <option value="en-uz">Eng-Uzb</option>
        <option value="uz-en">Uzb-Eng</option>
      </select>
      <input
        type="search"
        value={inputText}
              onChange={(event) => { setInputText(event.target.value); setClick(false)}}
      />
      <button onClick={() => setClick(!click)}>Search</button>
      {click && <Result search={inputText} lang={selectedValue} />}
    </div>
  );
}

export default Search;
