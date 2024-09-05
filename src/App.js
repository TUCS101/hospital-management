import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import PatientRegistration from './components/PatientRegistration';
import AppointmentScheduling from './components/AppointmentScheduling';
import PatientRecords from './components/PatientRecords';
import Notifications from './components/Notifications';
import Login from './components/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/patient-registration" element={<PatientRegistration />} />
                            <Route path="/appointment-scheduling" element={<AppointmentScheduling />} />
                            <Route path="/patient-records" element={<PatientRecords />} />
                            <Route path="/notifications" element={<Notifications />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
