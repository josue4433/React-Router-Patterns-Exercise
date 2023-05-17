import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

const Calculator = () => {
  const { operation, num1, num2 } = useParams();
  let result;

  switch (operation) {
    case 'add':
      result = Number(num1) + Number(num2);
      break;
    case 'subtract':
      result = Number(num1) - Number(num2);
      break;
    case 'multiply':
      result = Number(num1) * Number(num2);
      break;
    case 'divide':
      result = Number(num1) / Number(num2);
      break;
    default:
      result = '';
  }

  return (
    <div>
      <h1>Calculator</h1>
      <h2>Result: {result}</h2>
    </div>
  );
};

const App = () => {
  return (
    <Switch>
      <Route path="/:operation/:num1/:num2" component={Calculator} />
    </Switch>
  );
};

export default App;
