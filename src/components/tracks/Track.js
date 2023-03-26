import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPlay,
  faCompactDisc,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const play = <FontAwesomeIcon icon={faPlay} />;
const disc = <FontAwesomeIcon icon={faCompactDisc} />;
const right = <FontAwesomeIcon icon={faChevronRight} />;

const Track = ({ track }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong> {play} Track</strong>: {track.track_name}
            <br />
            <strong> {disc} Album</strong>: {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark d-block"
          >
            View Lyrics {right}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
