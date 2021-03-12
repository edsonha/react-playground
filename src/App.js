// import HocContainer from "./HOC/HocContainer";
// import ContextContainer from "./Context/ContextContainer";
// import ContextProviderPattern from "./ContextProviderPattern/ContextProviderPattern";
// import ContextProvider from "./ContextProviderPattern/context";
// import ComponentWillUnmount from "./CWU/CWUContainer";
import CustomHook from "./CustomHook/CustomHook";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <HocContainer /> */}
      {/* <ContextContainer /> */}
      {/* <ContextProvider>
        <ContextProviderPattern />
      </ContextProvider> */}
      {/* <ComponentWillUnmount /> */}
      <CustomHook />
    </div>
  );
};

export default App;
