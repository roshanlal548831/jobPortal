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
import AdminJobs from './components/admin/Jobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/applicamts/Applicants';
import ProtectedRoute from './components/admin/ProtectedRoute';
import UserProtectedRoute from './components/admin/UserProtectRoute';

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
    element:<Signup/>
   },
   {
    path:"/jobs",
    element:<UserProtectedRoute><Jobs/></UserProtectedRoute>
   },
   {
    path:"/description/:id",
    element:<UserProtectedRoute><JobDescription/></UserProtectedRoute>
   },
   {
    path:"/browse",
    element:<UserProtectedRoute><Browse/></UserProtectedRoute>
   },
   {
    path:`profile`,
    element:<UserProtectedRoute><Profile/></UserProtectedRoute>
   },
   {
    path:"/admin/companies",
    element:<ProtectedRoute> <Companies/></ProtectedRoute>
   },
   {
    path:"/admin/companies/create",
    element:<ProtectedRoute><CompanyCreate/></ProtectedRoute>
   },
   {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
   },
   {
    path:"/admin/jobs/",
    element:<ProtectedRoute> <AdminJobs/></ProtectedRoute>
   },
   {
    path:"/admin/job/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute>
   },
   {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute> <Applicants/></ProtectedRoute>
   },
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
