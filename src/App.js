// import HocContainer from "./HOC/HocContainer";
// import ContextContainer from "./Context/ContextContainer";
import ContextProviderPattern from "./ContextProviderPattern/ContextProviderPattern";
import ContextProvider from "./ContextProviderPattern/context";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <HocContainer /> */}
      {/* <ContextContainer /> */}
      <ContextProvider>
        <ContextProviderPattern />
      </ContextProvider>
    </div>
  );
};

export default App;
