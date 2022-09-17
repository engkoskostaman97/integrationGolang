import { React, useState } from "react";
import bgImg from "../assets/the-witcher.png";
import { Link } from "react-router-dom";
import img from "../assets/txtw.png";
import movies from "../dummyData/movies.js";
import tvSeries from "../dummyData/tvseries.js";

function HomePage() {
  const title = "Home";
  document.title = "Dumbflix | " + title;
  const [dataMovies, setDataMovies] = useState(movies);
  const [dataTvSeries, setDataTvSeries] = useState(tvSeries);

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
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beast
            </p>
            <div className="d-flex">
              <p style={{ padding: "3px" }}>2019 </p>{" "}
              <p className="ms-3 tvseries"> TV Series</p>
            </div>
            <button className="btn-watch mt-2">WATCH NOW !</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h4 className="text-white ms-3">Tv Series</h4>
        <div className="containerCard">
          {dataTvSeries.slice(0, 6).map((item) => (
            <Link to="/detailFilm">
              <div className="box" key={item.id}>
                <div className="imgBx">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h4 className="text-white ms-3">Movies</h4>
        <div className="containerCard">
          {dataMovies.slice(0, 6).map((item) => (
            <Link to="/detailFilm">
              <div className="box mb-5" key={item.id}>
                <div className="imgBx">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.year}</p>
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

export default HomePage;
