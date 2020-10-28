import './style.css';
import React from 'react';

class CounterCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { e: { name, create, update, id, number } } = this.props;
        return (
            <div className="counterCard">
                <div>Creado por: {name}</div>
                <div>Creado: {create}</div>
                <div>Actualizado: {update}</div>
                <div className="grupButtonCard">
                    <button className="buttonCard" onClick={this.props.minusNumberCard.bind(this, id)}>-</button>{number}
                    <button className="buttonCard" onClick={this.props.sumNumberCard.bind(this, id)}>+</button>
                    <button className="buttonCard" onClick={this.props.deleteCard.bind(this, id)}>Eliminar</button>
                </div>
            </div>
        )
    }
}
export default CounterCards;