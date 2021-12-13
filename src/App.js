import React, { useContext, useEffect } from 'react';
import Context from './context.js/myContext';
import './App.css';

function App() {
  const { meals, setMeals } = useContext(Context);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
  }, [setMeals])

  if (!meals.length) return <h1>LOADING</h1>;

  return (
    <div className='App'>
      {meals.map(meal => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} width='200' />
        </div>
      ))}
    </div>
  );
}

export default App;
