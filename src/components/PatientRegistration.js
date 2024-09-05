import React, { Component } from 'react';

class PatientRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            diagnosis: '',
            patients: []
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newPatient = { name: this.state.name, age: this.state.age, diagnosis: this.state.diagnosis };
        this.setState({ patients: [...this.state.patients, newPatient], name: '', age: '', diagnosis: '' });
    }

    render() {
        return (
            <section className="patient-registration">
                <h2>Patient Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
                    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} required />
                    <input type="text" name="diagnosis" placeholder="Diagnosis" value={this.state.diagnosis} onChange={this.handleChange} required />
                    <button type="submit">Register</button>
                </form>
                <div className="patient-list">
                    <h3>Registered Patients</h3>
                    <ul>
                        {this.state.patients.map((patient, index) => (
                            <li key={index}>{`${patient.name} - Age: ${patient.age} - Diagnosis: ${patient.diagnosis}`}</li>
                        ))}
                    </ul>
                    <button onClick={() => window.print()}>Print Patients</button>
                </div>
            </section>
        );
    }
}

export default PatientRegistration;
