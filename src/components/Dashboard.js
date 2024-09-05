import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
    // Sample data for the bar chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Patient Registrations',
                data: [30, 45, 20, 60, 90, 50, 70],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Sample data for statistics
    const totalRegistrations = 200;
    const totalAppointments = 150;

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="chart-container">
                <Bar data={data} />
            </div>
            <div className="statistics">
                <div className="stat-item">
                    <h3>Total Patient Registrations:</h3>
                    <p>{totalRegistrations}</p>
                </div>
                <div className="stat-item">
                    <h3>Total Appointments Scheduled:</h3>
                    <p>{totalAppointments}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
