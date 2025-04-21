import { useEffect } from 'react';
import { Outlet, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log({ error } );

  useEffect(() => {
    if (error?.status === 404) {
        navigate('/connect')
    }
  }, [error?.status, navigate])

  return <div>
    Why no?
  </div>
};

export default ErrorPage;
