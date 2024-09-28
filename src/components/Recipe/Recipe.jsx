import "./Recipe.css";

const Recipe = ({ image, title }) => {
  return (
    <div className="recipe">
      <a href="#">
        <img src={image} alt="recipe img" className="recipe-img"/>
        <div className="recipe-title">{title.split('(')[0]}</div>
      </a>
    </div>
  );
};
export default Recipe;
