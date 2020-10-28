import './style.css';
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'

class FormAddStudents extends React.Component {

    constructor(props) {

        super(props)
        this.state = {}

    }

    render() {

        return (
            <div className="FormAddStudents">
                <h1>Agregar Estudiante</h1>
            </div>
        );
    }
}

export default FormAddStudents;
