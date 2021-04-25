import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  const APP_ID = '122141';
  const APP_KEY = '131311343454asdaww1ewt23ed';
  const GET_RECIPES = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    // getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch(GET_RECIPES);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const submitSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={submitSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button
          type="submit"
          className="search-button"
        >Search</button>
      </form>
      <div className="recipes">
        {recipes.map(data => (
          <Recipe
            key={data.recipe.label}
            title={data.recipe.label}
            calories={data.recipe.calories}
            image={data.recipe.image}   
            ingredients={data.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
