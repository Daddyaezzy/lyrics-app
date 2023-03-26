// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// import dotenv from "dotenv";

// const router = express.Router();
// console.log(dotenv.config({ path: "../../.env" }));
// const apikey = process.env.API_KEY;
// console.log(apikey);

// router.get("/", (req, res) => {
//   const API = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ng&f_has_lyrics=1&apikey=${apikey}`;

//   fetch(API)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(apikey);
//       console.log(data);
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       //   console.log(apikey);
//       console.log(err);
//     });
// });

// router.get("/lyrics/:id", (req, res) => {
//   let id = req.params.id;
//   const API = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apikey}`;

//   console.log(API);
//   fetch(API)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       //   console.log(apikey);
//       console.log(err);
//     });
// });

// export { router };
