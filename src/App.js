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
            <AlbumCard
              text="Lorem ipsum 1ere card"
              imageUrl="https://images.unsplash.com/photo-1593874236570-fd37dc57f23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
              links={{
                view: 'http://example.com/1st-card/view',
                edit: 'http://example.com/1st-card/edit',
              }}
            />
            <AlbumCard
              imageUrl="https://images.unsplash.com/photo-1547001817-11e7fa50ec93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
            <AlbumCard
              highlightTime
              text="Lorem ipsum 3eme card"
              imageUrl="https://images.unsplash.com/photo-1560755572-8b0fb6f23272?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
