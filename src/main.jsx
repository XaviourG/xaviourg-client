import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './index.css'
import ConnectPage from './pages/connect';
import ErrorPage from './pages/404';
import ResumePage from './pages/resume';

const router = createBrowserRouter([{
  path: '/',
  element: <Outlet />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <ResumePage />
    },
    {
      path: '/connect',
      element: <ConnectPage />
    }]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
