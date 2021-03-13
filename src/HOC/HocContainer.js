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
import Extra from "./Extra";

const HocContainer = () => {
  return (
    <div className="App">
      <UserPost title="USER POST" source="posts" />
      <hr />
      <UserProfile title="USER PROFILE" source="users" />
      <hr />
      <Extra title="EXTRA COMPONENT" source="extra" />
    </div>
  );
};

export default HocContainer;
