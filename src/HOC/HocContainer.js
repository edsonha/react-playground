// Simple
// const withSecret = (Component) => {
//   const WrappedComponent = (props) => {
//     return <Component {...props} text="SECRET" />;
//   };
//   return WrappedComponent;
// };

// Shortcut
// const withSecret = (Component) => (props) => {
//   return <Component {...props} text="SECRET" />;
// };

// const AppWithoutSecret = ({ text }) => (
//   <span style={{ color: "red" }}>{`Secret is ${text}`}</span>
// );
// const HocContainer = withSecret(AppWithoutSecret);

//withHook
import UserPost from "./UserPost";
import UserProfile from "./UserProfile";

const HocContainer = () => {
  return (
    <div className="App">
      <h2>POST</h2>
      <UserPost />
      <hr />
      <h2>PROFILE</h2>
      <UserProfile />
    </div>
  );
};

export default HocContainer;
