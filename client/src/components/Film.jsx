import React, { Component } from "react";
import Endgame from "../assets/film/movies/Endgame.mp4";

// const sources = {
//   Endgame: "../assets/movies/film/Endgame.mp4",
// };

export default class Film extends Component {
  render() {
    return (
      <>
        {/* <div className="video-control">
          <video controls style={{ height: "350px", width: "100%" }}>
            <source src={Endgame} type="video/mp4" />
          </video>
        </div> */}

        <div className="video-control">
          <iframe
            src="https://www.youtube.com/embed/TcMBFSGVi1c"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="900px"
            height="300px"
          />
        </div>
      </>
    );
  }
}
