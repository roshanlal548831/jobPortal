import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/jobs/Jobs';
import Browse from './components/browse/Browse';
import Profile from './components/profile/Profile';
import JobDescription from './components/jobs/JobDescription';

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
