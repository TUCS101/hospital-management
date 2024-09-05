import React, { Component } from 'react';

class PatientRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientId: '',
            record: '',
            records: []
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newRecord = { patientId: this.state.patientId, record: this.state.record };
        this.setState({ records: [...this.state.records, newRecord], patientId: '', record: '' });
    }

    render() {
        return (
            <section className="patient-records">
                <h2>Patient Records</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="patientId" placeholder="Patient ID" value={this.state.patientId} onChange={this.handleChange} required />
                    <textarea name="record" placeholder="Record Details" value={this.state.record} onChange={this.handleChange} required></textarea>
                    <button type="submit">Add Record</button>
                </form>
                <div className="record-list">
                    <h3>Patient Records</h3>
                    <ul>
                        {this.state.records.map((record, index) => (
                            <li key={index}>{`ID: ${record.patientId} - Record: ${record.record}`}</li>
                        ))}
                    </ul>
                    <button onClick={() => window.print()}>Print Records</button>
                </div>
            </section>
        );
    }
}

export default PatientRecords;
