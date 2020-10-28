import './App.css';
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import Home from './screens/Home';
import Counters from './screens/Counters';
import CounterCards from './screens/CounterCards';
import Form from './screens/Form';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { screens: 'Home' }
  }

  // comienza codigo que contiene funciones de lihuel


  addCard = () => {
    this.setState({ idCard: this.state.idCard + 1 })
    const newCard = {
      id: this.state.idCard,
      name: this.state.name,
      create: Date(),
      update: Date(),
      number: 0
    }
    this.setState({
      card: [...this.state.card, newCard]
    })
  }
  deleteCard = (id) => {
    const newCard = this.state.card.filter(card => card.id !== id);
    this.setState({ card: newCard })
  }
  sumNumberCard = (id) => {
    const newCard = this.state.card.map(card => {
      if (card.id === id) {
        card.number++;
        card.update = Date();
      }
      return card;
    });
    this.setState({ card: newCard })
  }
  minusNumberCard = (id) => {
    const newCard = this.state.card.map(card => {
      if (card.id === id) {
        card.number--;
        card.update = Date();
      }
      return card;
    });
    this.setState({ card: newCard })
  }

  // termina funciones de lihuel


  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Redirect to="/home" />

          <button><Link to="/form">Students List</Link></button>
          <button><Link to="/counters">Counters</Link></button>

          <Route exact path="/counters">
            <Counters
              card={this.state.card}
              addCard={this.addCard}
              deleteCard={this.deleteCard}
              sumNumberCard={this.sumNumberCard}
              minusNumberCard={this.minusNumberCard}
            />
          </Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/countercards"><CounterCards /></Route>
          <Route exact path="/form"><Form /></Route>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;

//          <button><Link to="/countercards">CounterCards</Link></button>
//          <button><Link to="/home">Home</Link></button>


