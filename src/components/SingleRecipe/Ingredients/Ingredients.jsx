import "./Ingredients.css";

const Ingredients = ({ recipe }) => {
  const combinedIngredients = [];

  for (let i = 1; i <= 20; i++) {
    const measure = recipe[`strMeasure${i}`];
    const ingredient = recipe[`strIngredient${i}`];
    if (measure && ingredient) {
      combinedIngredients.push(`${measure} of ${ingredient}`);
    }
  }

  const recipeIngredients = combinedIngredients.map((ingredient, index) => {
    return (
      <p key={index} className="ingredient">
        {ingredient}
      </p>
    );
  });

  return (
    <>
      <h1 className="ingredient-heading">Ingredients</h1>
      {recipeIngredients}
    </>
  );
};

export default Ingredients;
