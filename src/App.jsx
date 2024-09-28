import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [recipeData, setRecipeData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAPI(query) {
      const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      try {
        const response = await fetch(api + query);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes!");
        }
        const resData = await response.json();
        setRecipeData(resData.meals);
        console.log(resData.meals);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchAPI("all");
  }, []);

  if (error) {
    return <h2 className="error-msg">Error: {error}</h2>;
  }

  const recipeContent = [];
  if (recipeData) {
    for (let i = 0; i < 4; i++) {
      recipeContent.push(
        <Recipe
          key={recipeData[i].idMeal}
          image={recipeData[i].strMealThumb}
          title={recipeData[i].strMeal}
        />
      );
    }
  }
  return (
    <>
      <Navbar />
      <Header />
      <div className="recipe-container">
        <div className="recipes">{recipeContent}</div>
      </div>
      <div className="break">
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default App;
