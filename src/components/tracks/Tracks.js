import React from "react";
import Spinner from "../layout/Spinner";
import Track from "./Track";
import { Consumer } from "../../context";

const Tracks = () => {
  return (
    <Consumer>
      {(value) => {
        const { trackList, heading } = value;

        if (trackList === undefined || trackList.length === 0) {
          return <Spinner />;
        } else {
          return (
            <>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {trackList.map((item) => (
                  <Track key={item.track.track_id} track={item.track} />
                ))}
              </div>
            </>
          );
        }
      }}
    </Consumer>
  );
};

export default Tracks;
