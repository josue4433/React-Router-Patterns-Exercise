import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // Load colors from localStorage if available
    const savedColors = JSON.parse(localStorage.getItem('colors'));
    if (savedColors) {
      setColors(savedColors);
    }
  }, []);

  useEffect(() => {
    // Save colors to localStorage whenever it changes
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const handleAddColor = (newColor) => {
    setColors((prevColors) => [newColor, ...prevColors]);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm handleAddColor={handleAddColor} />
        </Route>
        <Route exact path="/colors/:color">
          <ColorDetails colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
};

export default App;
