import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";

const goBack = <FontAwesomeIcon icon={faChevronLeft} />;

const Lyrics = () => {
  const [lyrics, setLyrics] = useState({});
  const [track, setTrack] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://lyrics-app-v6mn.onrender.com/lyrics/${id}`)
      .then((res) => {
        // console.log(res.data);
        setLyrics(res.data.message.body.lyrics);
        // console.log(lyrics);

        return axios
          .get(`https://lyrics-app-v6mn.onrender.com/track/${id}`)
          .then((res) => {
            // console.log(res.data);
            setTrack(res.data.message.body.track);
          });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {Object.keys(track).length === 0 || Object.keys(lyrics).length === 0 ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            {goBack}
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Song Genre: </strong>
              {
                track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words: </strong>{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date: </strong>
              <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Lyrics;
