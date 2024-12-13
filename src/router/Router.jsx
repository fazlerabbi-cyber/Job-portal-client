import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/signin/Signin";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Rout not found</h2>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: '/myApplication',
          element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path: 'addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/myPostedJobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: 'viewApplication/:job_id',
          element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'signIn',
            element: <Signin></Signin>
        }
      ]
    },
  ]);

  export default router