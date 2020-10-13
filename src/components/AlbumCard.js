import React from 'react';

function AlbumCard() {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="bd-placeholder-img card-img-top" src="https://via.placeholder.com/150" alt="Placeholder" />
        <div className="card-body">
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
