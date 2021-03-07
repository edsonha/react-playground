// Before Context
// const Grandchild = (props) => props.userData;

// Previous way of using Context
// import CustomizedContext from "./Context";

// const Grandchild = () => (
//   <CustomizedContext.Consumer>
//     {(value) => {
//       if (value) {
//         return (
//           <div>
//             <h1>Profile</h1>
//             name: {value.name}
//             <br />
//             username: {value.username}
//             <br />
//             email: {value.email}
//           </div>
//         );
//       } else {
//         return <h1>Something wrong with the Context</h1>;
//       }
//     }}
//   </CustomizedContext.Consumer>
// );

import { useContext } from "react";
import CustomizedContext from "./Context";

const Grandchild = () => {
  const value = useContext(CustomizedContext);

  return (
    <div>
      <h1>Profile</h1>
      name: {value.name}
      <br />
      username: {value.username}
      <br />
      email: {value.email}
    </div>
  );
};

export default Grandchild;
