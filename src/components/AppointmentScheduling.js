import React, { Component } from 'react';

class AppointmentScheduling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientName: '',
            appointmentDate: '',
            appointments: []
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newAppointment = { patientName: this.state.patientName, date: this.state.appointmentDate };
        this.setState({ appointments: [...this.state.appointments, newAppointment], patientName: '', appointmentDate: '' });
    }

    render() {
        return (
            <section className="appointment-scheduling">
                <h2>Appointment Scheduling</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="patientName" placeholder="Patient Name" value={this.state.patientName} onChange={this.handleChange} required />
                    <input type="date" name="appointmentDate" value={this.state.appointmentDate} onChange={this.handleChange} required />
                    <button type="submit">Schedule</button>
                </form>
                <div className="appointment-list">
                    <h3>Scheduled Appointments</h3>
                    <ul>
                        {this.state.appointments.map((appointment, index) => (
                            <li key={index}>{`${appointment.patientName} - Date: ${appointment.date}`}</li>
                        ))}
                    </ul>
                    <button onClick={() => window.print()}>Print Appointments</button>
                </div>
            </section>
        );
    }
}

export default AppointmentScheduling;
