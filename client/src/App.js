import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Addfilm from "./component/addfilm";
import TvseriesPage from './pages/TvseriesPage'
import MoviesPage from './pages/MoviesPage'
import Paymen from './pages/paymen'
import NotFound from './components/NotFound'
import Home from './pages/Home';
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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  // console.clear();
  console.log("ini state", state)
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    console.log(state.isLogin);

    // Redirect Auth
    // if (state.isLogin === false) {
    //   navigate('/auth');
    // } else {
    //   if (state.user.status === 'admin') {
    //     navigate('/homeadmin');
    //   } else if (state.user.status === '') {
    //     navigate('/');
    //   }
    // }
  }, [state]);
// console.log("bacaaa",isLogin)
  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data;

      console.log("ini payload", payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
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
