import './style.css';
import React from 'react';
import FormAddStudents from '../FormAddStudents';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'

class Form extends React.Component {

    constructor(props) {

        super(props)
        this.state = { users: [] }

    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    }

    renderUsers() {
        const users = this.state.users
        return users.map(user => (
            <div>
                <li>
                    <h2>{user.name.first} {user.name.last}</h2>
                    <a href={'mailto:' + user.email}>{user.email}</a>
                    <p>Genero: {user.gender}</p>
                    <p>Edad: {user.age}</p>
                    <img src={user.picture.medium} alt="user" />
                </li>
                <button><Link to="/FormAddStudents">Modificar</Link></button>
                <Route exact path="/FormAddStudents"><FormAddStudents /></Route>
                <button><Link to="/FormAddStudents">Eliminar</Link></button>
                <Route exact path="/FormAddStudents"><FormAddStudents /></Route>
            </div>
        ))

    }

    render() {

        return (
            <div className="Form">
                <h1>Lista de Estudiantes</h1>
                <button><Link to="/FormAddStudents">Agregar</Link></button>
                <Route exact path="/FormAddStudents"><FormAddStudents /></Route>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default Form;
