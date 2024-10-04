import { useState } from 'react';
import './App.css';
import Navbar from './components/shard/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import { Input } from './components/ui/input';

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
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </>
  )
}

export default App
