import Grandchild from "./Grandchild";

// Before Context
// const Child = (props) => <Grandchild {...props} />;

// With Context - no need for props drilling
const Child = () => <Grandchild />;

export default Child;
