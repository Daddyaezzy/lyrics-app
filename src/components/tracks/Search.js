import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const music = <FontAwesomeIcon icon={faMusic} />;

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");

  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);
  //   useEffect(() => {}, []);

  const findTrack = (dispatch, e) => {
    e.preventDefault();

    axios
      .get("http://localhost:5000/search/song", {
        params: { q: searchTitle },
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
        setSearchTitle("");
      });
  };

  const onChange = (e) => {
    setSearchTitle(e.target.value);
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">{music} Search For A Song</h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form onSubmit={(e) => findTrack(dispatch, e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song title..."
                  ref={searchRef}
                  name="searchTitle"
                  value={searchTitle}
                  onChange={onChange}
                />
              </div>
              <button
                className="btn btn-primary btn-lg btn-block mb-2 mt-3 d-block w-100"
                type="submit"
              >
                Get Track Lyrics
              </button>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Search;
