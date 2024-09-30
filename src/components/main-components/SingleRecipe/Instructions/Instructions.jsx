import "./Instructions.css";

const Instructions = (props) => {
  let recipeInstructions = props.instructions.split("\r\n");
  
  console.log(recipeInstructions)
  let instructions = recipeInstructions.map((instruction, index) => {
    return (
      <div key={index} className="single-instruction">
        <header>
          <h3 className="uppercase font-semibold text-sm">Step {index + 1}</h3>
          <div></div>
        </header>
        <p>{instruction}</p>
      </div>
    );
  });

  return (
    <>
      <h1 className="instruction-heading">Instructions</h1>
      {instructions}
    </>
  );
};

export default Instructions;
