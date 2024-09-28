import "./Recipe.css";

const Recipe = ({ image, title, otherData, onSelect }) => {
  return (
    <div className="recipe" onClick={()=>onSelect(otherData)}>
      <img src={image} alt="recipe img" className="recipe-img" />
      <div className="recipe-title">{title.split("(")[0]}</div>
    </div>
  );
};
export default Recipe;
