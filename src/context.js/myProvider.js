import React, { useEffect, useState } from 'react';
import Context from './myContext';

function Provider({ children, initial }) {
  const [meals, setMeals] = useState([]);

  const value = {
    meals,
    setMeals
  }

  return <Context.Provider value={ initial || value }>
    {children}
  </Context.Provider>
}

export default Provider;
