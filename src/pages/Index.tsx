
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the Home page
    navigate('/home', { replace: true });
  }, [navigate]);
  
  // Return Home component directly while waiting for redirect
  return <Home />;
};

export default Index;
