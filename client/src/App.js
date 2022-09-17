import React, { Component, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Addfilm from "./component/addfilm";
import TvseriesPage from './pages/TvseriesPage'
import MoviesPage from './pages/MoviesPage'
import Paymen from './pages/paymen'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import Tvshow from "./pages/tvshow";
import Movies from "./pages/movies";
import Profiles from "./pages/profiles";
import Detailfilm from "./pages/detailfilm";
import Admin from "./component/admin";
import Listfilms from "./component/listfilms";
import Listdetails from "./component/listdetails";
import './App.css';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let api = API();
  let Navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      Navigate("/")
    } else {
      if (state.user.status == "admin") {
        Navigate("/admin");
        // history.push("/complain-admin");
      } else if (state.user.status == "customer") {
        Navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer" + localStorage.token,
        },
      };
      const response = await API.get("/check-auth", config);

      // If the token incorrect
      if (response.code != 200) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // // Get user data
      let payload = response.data;
      // // Get token from local storage
      payload.token = localStorage.token;

      // // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <Routes>
        {/* router admin */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/listfilms/:category' element={<Listfilms />} />
        <Route path='/listfilms' element={<Listfilms />} />
        <Route path='/addfilm' element={<Addfilm />} />
        <Route path='/listdetails' element={<Listdetails />} />
        {/* router user */}
        <Route path='/' element={<Home />} />
        <Route path="/tvshow" element={<TvseriesPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshow />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/paymen" element={<Paymen />} />
        <Route path="/detailfilm" element={<Detailfilm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );

}

export default App;
