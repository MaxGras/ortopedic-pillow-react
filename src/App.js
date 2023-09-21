import FrontDescrp from "./components/frontPartDescrp";
import Header from "./components/headerComponent";
import MainDescrp from "./components/mainPartDescrp";

function App() {

  return (
    <div className="w-[100%] lg:mx-auto lg:px-[35%]">
      <Header />
      <FrontDescrp />
      <MainDescrp/>
      
    </div>
  );
}

export default App;
