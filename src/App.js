import React from 'react';
import Cityname from './Cityname';
import './App.css';
import Leftcontainer from './Leftcontainer';
import SearchEngine from './SearchEngine';




export default function App() {
  return (
    <div className="App">
      <div className="container-sm">
  <Cityname city="Vienna"/>
<div>
  <Leftcontainer />
</div>
<div>
  <SearchEngine />
</div>
        <footer>
        <a href="https://github.com/ivs-silva/silk-weather-app">Open Source code by Ivonne Silva</a>
        </footer>
      
    </div>
    </div>
  );
}


