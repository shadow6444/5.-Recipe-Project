import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";

const App = () => {
  const [recipeData, setRecipeData] = useState();
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState("main");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  function handleSelectedRecipe(recipe) {
    setSelectedRecipe(recipe);
    setCurrentPage("singleRecipe");
  }

  function handleHomePage(){
    setCurrentPage('main')
    setSelectedRecipe(null);
  }

  if (error) {
    return <h2 className="error-msg">Error: {error}</h2>;
  }

  const recipeContent = [];
  if (recipeData) {
    for (let i = 0; i < 4; i++) {
      recipeContent.push(
        <Recipe
          onSelect={handleSelectedRecipe}
          key={recipeData[i].idMeal}
          otherData={recipeData[i]}
          image={recipeData[i].strMealThumb}
          title={recipeData[i].strMeal}
        />
      );
    }
  }
  return (
    <>
      <Navbar onSelect={handleHomePage}/>
      {currentPage === "main" ? (
        <>
          <Header />
          <div className="recipe-container">
            <div className="recipes">{recipeContent}</div>
          </div>
          <div className="break">
            <hr />
          </div>
        </>
      ) : (
        <SingleRecipe recipe={selectedRecipe}/>
      )}
      <Footer />
    </>
  );
};

export default App;
