import withData from "./WithData";

const UserProfile = ({ data }) => {
  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    data.map((user) => <div key={user.id}>{user.name}</div>)
  );
};

export default withData(UserProfile, "users");
