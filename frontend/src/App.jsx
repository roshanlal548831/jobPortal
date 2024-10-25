import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/jobs/Jobs';
import Browse from './components/browse/Browse';
import Profile from './components/profile/Profile';
import JobDescription from './components/jobs/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';

const appRouter = createBrowserRouter([
   {
    path: "/",
    element: <Home/>
   },
   {
    path: "/login",
    element: <Login/>
   },
   {
    path: "/signup",
    element: <Signup/>
   },
   {
    path:"/jobs",
    element: <Jobs/>
   },
   {
    path:"jobs/description/:id",
    element: <JobDescription/>
   },
   {
    path:"/browse",
    element: <Browse/>
   },
   {
    path:`profile`,
    element: <Profile/>
   },
   {
    path:"/admin/companies",
    element: <Companies/>
   },
   {
    path:"/admin/companies/create",
    element: <CompanyCreate/>
   },
   {
    path:"/admin/companies/:id",
    element: <CompanySetup/>
   },
  //  {
  //   path:"/admin/jobs",
  //   element: <Profile/>
  //  },
])

function App() {
  

  return (
    <>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </>
  )
}

export default App
