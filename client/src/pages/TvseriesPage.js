import { React, useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/bglacasa.png";
import img from "../assets/lacasa.png";
import tvSeries from "../dummyData/tvseries.js";

function TvseriesPage() {
  const title = "Tv Shows";
  document.title = "Dumbflix | " + title;

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
              Money Heist is a crime drama on Netflix - originally called La
              Casa de Papel. Money Heist season 3 has just been released by the
              streaming service. The plot reads: "Eight thieves take hostages
              and lock themselves in the Royal Mint of Spain as a criminal
              mastermind manipulates the police to carry out his plan."
            </p>
            <div className="d-flex">
              <p style={{ padding: "3px" }}>2017 </p>
              <p className="ms-3 tvseries"> TV Series</p>
            </div>
            <button className="btn-watch mt-2">WATCH NOW !</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h4 className="text-white ms-3">Tv Series</h4>
        <div className="containerCard">
          {dataTvSeries.map((item) => (
            <Link to="/detailFilm">
              <div className="box mb-5">
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

export default TvseriesPage;
