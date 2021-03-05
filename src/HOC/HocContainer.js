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
      <UserPost title="USER POST" source="posts" />
      <hr />
      <UserProfile title="USER PROFILE" source="users" />
    </div>
  );
};

export default HocContainer;
