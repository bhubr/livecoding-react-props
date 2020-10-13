import React from 'react';
import Header from './components/Header';
import AlbumCard from './components/AlbumCard';
import './css/bootstrap.min.css';
import './css/album.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
