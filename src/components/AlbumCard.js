import React from 'react';

function AlbumCard(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="bd-placeholder-img card-img-top" src={props.imageUrl} alt="Placeholder" />
        <div className="card-body">
          <p className="card-text">{props.text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a type="button" className="btn btn-sm btn-outline-secondary" href={props.links.view}>View</a>
              <a type="button" className="btn btn-sm btn-outline-secondary" href={props.links.edit}>Edit</a>
            </div>
            <small className={props.highlightTime ? "text-danger" : "text-muted"}>9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}

AlbumCard.defaultProps = {
  imageUrl: 'https://via.placeholder.com/150',
  links: {}
};

export default AlbumCard;
