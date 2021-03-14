// import HocContainer from "./HOC/HocContainer";
// import ContextContainer from "./Context/ContextContainer";
// import ContextProviderPattern from "./ContextProviderPattern/ContextProviderPattern";
// import ContextProvider from "./ContextProviderPattern/context";
// import ComponentWillUnmount from "./CWU/CWUContainer";
// import CustomHook from "./CustomHook/CustomHook";
// import ReducerHook from "./ReducerHook/ReducerHook";
import MemoCallbackHook from "./MemoCallbackHook/MemoCallbackHook";
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
      {/* <CustomHook /> */}
      {/* <ReducerHook /> */}
      <MemoCallbackHook />
    </div>
  );
};

export default App;
