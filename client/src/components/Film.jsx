import React from 'react'
import { useQuery } from "react-query";
import Endgame from "../assets/film/movies/Endgame.mp4";
import { API } from '../config/api'
import { useParams } from 'react-router-dom';


// const sources = {
//   Endgame: "../assets/movies/film/Endgame.mp4",
// };

const Film = () => {

  let { id } = useParams();

  let { data: film } = useQuery('filmCache', async () => {
    const response = await API.get('/film/' + id);
    console.log("ini response", response)
    return response.data.data;
  });

  return (
    <>


      <div className="video-control">
        <iframe
          src={film?.linkfilm}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          width="900" height="500"
        />
      </div>
    </>
  )

}

export default Film;