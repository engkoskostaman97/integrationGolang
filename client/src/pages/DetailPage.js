import React, { useState, useEffect, useContext } from "react";
import Film from "../components/Film";
import movies from "../dummyData/movies";
import tvSeries from "../dummyData/tvseries";
import Card from 'react-bootstrap/Card';
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
import { UserContext } from "../context/userContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function DetailPage() {
  const [state] = useContext(UserContext);
  let navigate = useNavigate();
  let { id } = useParams();

  let { data: film } = useQuery("productCache", async () => {
    const response = await API.get("/film/" + id);
    return response.data.data;
  });
  console.log(film);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect subscribe
    if (state.user.subscribe === false) {
      navigate("/");
    }
  }, [state]);
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
          <div className="img-mov mt-2 ms-5">
            <img
              src={film?.thumbnailfilm}
              alt=""
              width="270px"

            />
          </div>
          <div className="desc-mov  mb-2 ms-5 px-5">
            <h2>{film?.title}</h2>
            <div className="d-flex text-muted">
              <p style={{ padding: "3px" }}>{film?.year} </p>
              <p className="ms-3 txt-mtd">{dataCategory.movies[3].category}</p>
            </div>
            <p
              className=""
              style={{
                textAlign: "justify",
                width: "80%",
              }}
            >
              {film?.description}
            </p>
          </div>
        </div>
        <div className="detail-play">
          <div
            className="img-in-play mt-1"

          >< Card style={{ backgroundColor: "black" }} className="detailCard d-flex align-items-center">
              <Card.Img variant="top" src={film?.thumbnailfilm} />
              <p className='text-light'>{film?.title}</p>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
