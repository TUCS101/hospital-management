import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any additional logout operations here if needed
        // Simulate setting the authentication state to false
        localStorage.removeItem('isLoggedIn'); // Example of clearing login state
        navigate('/');
    };

    // Do not show navigation and logout button if not logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const showLogoutButton = location.pathname !== '/' && isLoggedIn;

    return (
        <header className="app-header">
            <h1>Hospital Management System</h1>
            {isLoggedIn && (
                <>
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/patient-registration">Patient Registration</Link></li>
                            <li><Link to="/appointment-scheduling">Appointment Scheduling</Link></li>
                            <li><Link to="/patient-records">Patient Records</Link></li>
                            <li><Link to="/notifications">Notifications</Link></li>
                        </ul>
                        {showLogoutButton && (
                            <button className="logout-button" onClick={handleLogout}>Logout</button>
                        )}
                    </nav>
                </>
            )}
        </header>
    );
};

export default Header;
