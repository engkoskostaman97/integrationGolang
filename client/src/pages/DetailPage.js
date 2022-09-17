import React, { useState } from "react";
import Film from "../components/Film";
import movies from "../dummyData/movies";
import tvSeries from "../dummyData/tvseries";

function DetailPage() {
  const category = { movies, tvSeries };
  console.log(category);

  const [dataCategory, setDataCategory] = useState(category);
  console.log("Pemisa Cat");
  console.log(dataCategory.movies);
  return (
    <div>
      <Film />
      <div className="detail-bot">
        <div className="detail-desc">
          <div className="img-mov me-3">
            <img
              src="https://i.ytimg.com/vi/ePpJDKfRAyM/movieposter.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div className="desc-mov">
            <h2>Avengers: End Game</h2>
            <div className="d-flex text-muted">
              <p style={{ padding: "3px" }}>2019 </p>
              <p className="ms-3 txt-mtd">{dataCategory.movies[3].category}</p>
            </div>
            <p
              className=""
              style={{
                textAlign: "justify",
                width: "80%",
              }}
            >
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beast
            </p>
          </div>
        </div>
        <div className="detail-play">
          <div
            className="img-in-play mt-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(104, 106, 116, 0), rgba(0, 0, 0, 0.99)),url(https://i.ytimg.com/vi/ePpJDKfRAyM/movieposter.jpg)`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-end"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <p
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                In Play Now <br />
                <br />
                <br />
                <span className="text-muted"> Avengers: Endgame</span>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
