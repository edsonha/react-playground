import withData from "./WithData";

const UserProfile = ({ data, extra, source, title }) => {
  return data.map((user) => (
    <>
      <p>Extra data from HOC: {extra}</p>
      <p>Extra data from original props - source: {source}</p>
      <p>Extra data from original props - title: {title}</p>
      <div key={user.id}>{user.name}</div>
    </>
  ));
};

export default withData(UserProfile);
