import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
// import {router as apiCall} from "./apiCalls/apiCall";

const app = express();
dotenv.config({ path: "../.env" });

app.use(cors());
// app.use("", apiCall);
const apikey = process.env.API_KEY;

console.log(dotenv.config({ path: "../.env" }));

app.get("/", (req, res) => {
  const API = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ng&f_has_lyrics=1&apikey=${apikey}`;

  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(apikey);
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      //   console.log(apikey);
      console.log(err);
    });
});

app.get("/lyrics/:id", (req, res) => {
  let id = req.params.id;
  const API = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apikey}`;

  console.log(API);
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      //   console.log(apikey);
      console.log(err);
    });
});
app.get("/track/:id", (req, res) => {
  let id = req.params.id;
  const API = `https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${apikey}`;

  console.log(API);
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      //   console.log(apikey);
      console.log(err);
    });
});

app.get("/search/song", (req, res) => {
  const query = req.query.q;

  const API = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=3&page=1&s_track_rating=desc&apikey=${apikey}`;

  console.log(API);
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      //   console.log(apikey);
      console.log(err);
    });
});

app.listen(5000, () => {
  console.log("Backend Running");
});
