import { React, useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/bgjoker.png";
import img from "../assets/txtjoker.png";
import movies from "../dummyData/movies.js";
import { API } from "../config/api";
import { useQuery } from 'react-query';
function MoviesPage() {
  const title = "Movies";
  document.title = "Dumbflix | " + title;

  const [data, setData] = useState(movies);
  console.log(data);
  //   console.log(ts);
  let { data: films } = useQuery("moviesCache", async () => {
    const response = await API.get("/films");
    console.log("response film", response);

    const resultResponse = response.data.data;

    const resultFilter = resultResponse.filter((e) => {
      if (e.category_id === 2) {
        return e.category_id === 2;
      }
    });

    console.log(resultFilter);
    return resultFilter;
  });

  console.log(films);
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(104, 106, 116, 0), rgba(0, 0, 0, 0.99)), url(${bgImg})`,
          height: "110vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ctnm">
          <div className="container p-5">
            <img src={img} alt="" />
            <p
              className="mt-3"
              style={{
                textAlign: "justify",
                width: "43%",
              }}
            >
              In Gotham City, mentally troubled comedian Arthur Fleck is
              disregarded and mistreated by society. He then embarks on a
              downward spiral of revolution and bloody crime. This path brings
              him face-to-face with his alter-ego: the Joker.
            </p>
            <div className="d-flex">
              <p style={{ padding: "3px" }}>2019 </p>
              <p className="ms-3 movies"> Movies</p>
            </div>
            <button className="btn-watch mt-2">WATCH NOW !</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h4 className="text-white ms-3">Movies</h4>
        <div className="containerCard">
          {films?.map((item, index) => (
            <Link to={`/detailfilm/${item.id}`}>
              <div className="box mb-5" key={item.id}>
                <div className="imgBx">

                  <img src={item.thumbnailfilm} alt="" />
                </div>
                <div className="content">
                  <div>
                    <h2>{item?.title}</h2>
                    <p>{item?.year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesPage;
