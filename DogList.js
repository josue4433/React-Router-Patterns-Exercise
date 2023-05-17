import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn.',
          'Whiskey is a terrible guard dog.',
          'Whiskey wants to cuddle with you!'
        ]
      },
      // Rest of the dogs data
    ]
  };

  render() {
    return (
      <div>
        <Nav dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={this.props.dogs} />
          </Route>
          <Route path="/dogs/:name" render={routeProps => <DogDetails dogs={this.props.dogs} {...routeProps} />} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;
