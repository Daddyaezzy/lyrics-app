import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        trackList: action.payload,
        heading: "Search Result",
      };
    default:
      return state;
  }
};

export const Provider = (props) => {
  const [state, setState] = useState({
    trackList: [],
    heading: "",
    dispatch: (action) => setState((state) => reducer(state, action)),
  });

  useEffect(() => {
    axios
      .get("https://lyrics-app-v6mn.onrender.com")

      .then((res) => {
        // console.log(res.data);
        setState({
          trackList: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
          dispatch: (action) => setState((state) => reducer(state, action)),
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
