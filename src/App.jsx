import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/common-components/Navbar";
import Recipe from "./components/main-components/Recipe";
import Header from "./components/common-components/Header";
import Footer from "./components/common-components/Footer";
import SingleRecipe from "./components/main-components/SingleRecipe";
import PREP from "./PREP.js";

const App = () => {
  const [recipeData, setRecipeData] = useState();
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState("main");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchAPI(query) {
      setIsFetching(true);
      const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      try {
        const response = await fetch(api + query);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes!");
        }
        const resData = await response.json();
        setRecipeData(resData.meals);
        setIsFetching(false);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchAPI("all");
  }, []);

  function handleSelectedRecipe(recipe, prepData) {
    setSelectedRecipe({ recipe: recipe, prepData: prepData });
    setCurrentPage("singleRecipe");
  }

  function handleHomePage() {
    setCurrentPage("main");
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
          prepData={PREP[i]}
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
      <Navbar onSelect={handleHomePage} />
      <Header />
      {currentPage === "main" ? (
        <>
          <div className="search-container">
            <div className="search">
              <input
                type="text"
                className="search-input"
                placeholder="Search for a recipe"
              />
              <button>
                <i className="material-icons">search</i>
              </button>
            </div>
          </div>
          <div className="recipe-container">
            {isFetching ? (
              <p className="text-center text-lg font-medium">
                Fetching data from API...
              </p>
            ) : (
              <div className="recipes">{recipeContent}</div>
            )}
          </div>
          <div className="popular-brands">
            <h3>as seen in</h3>
            <ul className="popular-brand">
              <li>
                <img src="/buzzFeed.svg" alt="buzzfeed image" />
              </li>
              <li>
                <img src="/PureWow.svg" alt="PureWow image" />
              </li>
              <li>
                <img src="/BRIT+CO.svg" alt="brit co image" />
              </li>
              <li>
                <img src="/POPSUGAR.svg" alt="popsugar image" />
              </li>
              <li className="hidden lg:block">
                <img src="/theEveryGirl.svg" alt="the everygirl image" />
              </li>
              <li>
                <img src="/kitchn.svg" alt="kitchn image" />
              </li>
            </ul>
          </div>{" "}
        </>
      ) : (
        <>
          <SingleRecipe
            onSelect={handleHomePage}
            recipePrep={selectedRecipe.prepData}
            recipe={selectedRecipe.recipe}
          />
        </>
      )}
      <div className="break">
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default App;
