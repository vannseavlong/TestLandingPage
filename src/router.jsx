import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/en" replace />, // Default redirect to English
  },
  {
    path: '/:lang',
    element: <App />,
    loader: ({ params }) => {
      const supportedLangs = ['en', 'km', 'zh'];
      if (!supportedLangs.includes(params.lang)) {
        throw new Response('Language Not Found', { status: 404 });
      }
      return null;
    }
  }
]);

export default router;
