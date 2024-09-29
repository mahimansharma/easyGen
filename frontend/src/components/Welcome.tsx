import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1>Welcome to the Application!</h1>
          <p>We are glad to have you here.</p>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
