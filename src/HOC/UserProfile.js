import withData from "./WithData";

const UserProfile = ({ data, extra, source, title }) => {
  return data.map((user) => (
    <div key={user.id}>
      <p>Extra data from HOC: {extra}</p>
      <p>Extra data from original props - source: {source}</p>
      <p>Extra data from original props - title: {title}</p>
      <div>{user.name}</div>
    </div>
  ));
};

export default withData(UserProfile);
