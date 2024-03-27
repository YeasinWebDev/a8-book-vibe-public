import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './pages/Home.jsx'
import PageToRead from './pages/PageToRead.jsx'
import ListedBook from './pages/ListedBook.jsx'
import Details from './pages/Details.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact.jsx';
import Author from './pages/Author.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pageToRead',
        element: <PageToRead />
      },
      {
        path: '/listedBook',
        element: <ListedBook />
      },
      {
        path: '/details/:id',
        element: <Details />
      },{
        path: '/contact',
        element: <Contact />
      }
      ,{
        path: '/author',
        element: <Author />
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
)
