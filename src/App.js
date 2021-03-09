// import HocContainer from "./HOC/HocContainer";
// import ContextContainer from "./Context/ContextContainer";
import ContextProviderPattern from "./ContextProviderPattern/ContextProviderPattern";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <HocContainer /> */}
      {/* <ContextContainer /> */}
      <ContextProviderPattern />
    </div>
  );
};

export default App;
