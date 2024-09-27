import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import fetchAPI from "./fetchAPI";

const App = () => {
  console.log(fetchAPI("all"));
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
