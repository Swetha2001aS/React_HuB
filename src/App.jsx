import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';     
import HomeCards from './component/HomeCards';
import JobListing from './component/JobListing';  
import ViewAllJobs from './component/ViewAllJobs';

const router = createBrowserRouter( createRoutesFromElements(<Route index element={<h1> my new app </h1>} />));

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App
