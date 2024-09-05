import React from 'react';

const sampleNotifications = [
    { id: 1, date: '2024-09-01', message: 'Patient John Doe has a follow-up appointment tomorrow.' },
    { id: 2, date: '2024-09-02', message: 'Lab results for patient Jane Smith are now available.' },
    { id: 3, date: '2024-09-03', message: 'Reminder: Monthly staff meeting at 10 AM.' },
];

const Notifications = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Notification</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleNotifications.map(notification => (
                        <tr key={notification.id}>
                            <td>{notification.date}</td>
                            <td>{notification.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="print-button" onClick={handlePrint}>Print</button>
        </div>
    );
};

export default Notifications;
