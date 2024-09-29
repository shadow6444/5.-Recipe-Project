import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import "./SingleRecipe.css";

const SingleRecipe = ({ recipe, recipePrep, onSelect }) => {
  let tags;
  if (recipe.strTags) {
    const recipeTags = recipe.strTags.split(",");
    tags = recipeTags.map((tag,index) => {
      return (
        <button onClick={onSelect} key={index} className="tag">
          {tag}
        </button>
      );
    });
  }

  return (
    <>
      <header className="heading text-center">
        <h3>
          <span className="heading-style1">simple recipes made for</span>
          <span className="heading-style2 font-thin">
            real, actual, everyday life.
          </span>
        </h3>
      </header>

      <section className="single-recipe-container">
        <div className="single-recipe-details">
          <div className="single-recipe">
            <img
              src={recipe.strMealThumb}
              alt="recipe img"
              className="single-recipe-img"
            />
            <div className="single-recipe-info">
              <h1>{recipe.strMeal}</h1>
              <p>{recipePrep.info}</p>
              <div className="single-recipe-time">
                <div>
                  <i className="fas fa-clock"></i>
                  <h5>Prep Time</h5>
                  <p>{recipePrep.prepTime}</p>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <h5>Cook Time</h5>
                  <p>{recipePrep.cookTime}</p>
                </div>
                <div>
                  <i className="fas fa-user-friends"></i>
                  <h5>Serving</h5>
                  <p>{recipePrep.servings}</p>
                </div>
              </div>
              {recipe.strTags && <p className="recipe-tags">Tags: {tags}</p>}
            </div>
          </div>
          <div className="recipe-instructions-container">
            <div className="recipe-instructions">
              <Instructions instructions={recipe.strInstructions} />
            </div>
            <div className="recipe-ingredients">
              <Ingredients recipe={recipe} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleRecipe;
