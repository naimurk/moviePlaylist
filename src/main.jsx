import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


import Login from './Page/Login/Login';
import SignUp from "./Page/SignUp/SignUp"
import AuthProvider from './AuthProvider/AuthProvider';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Home from './Layout/Home';
import PlaylistCreation from './Layout/PlaylistCreation';
import IndividualMovie from './Page/IndividualMovie/IndividualMovie';


// Create a client
const queryClient = new QueryClient()
Modal.setAppElement('#root');



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "playlist-Creation",
    element: <PlaylistCreation></PlaylistCreation>
  },
  {
    path: "movie",
    element: <IndividualMovie></IndividualMovie>,
    
    
  }
]);
const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
export const MovieBannerContext = createContext("golden")
export const MovieListContext = createContext("bolden")

const Mainn = () => {
  const [movieBannerValue, setMovieBannerValue] = useState({playListId:'64d7aafe300eea7db8e57572',id:57215})
  const [movieListValue, setMovieListValue] = useState(false)

  return (
    <React.StrictMode>


      <MovieListContext.Provider value={[movieListValue, setMovieListValue]}>
        <MovieBannerContext.Provider value={[movieBannerValue, setMovieBannerValue]}>
          <AuthProvider>
            <QueryClientProvider client={queryClient} >
              <React.StrictMode>
                <RouterProvider router={router} />
              </React.StrictMode>
            </QueryClientProvider>
          </AuthProvider>
        </MovieBannerContext.Provider>
      </MovieListContext.Provider>


    </React.StrictMode>
  );
};

export default Mainn;

ReactDOM.createRoot(appRoot).render(<Mainn></Mainn>)
